import React, { useState } from 'react';
import { Group } from '@visx/group';
import { hierarchy, Tree } from '@visx/hierarchy';
import { ScaleSVG } from '@visx/responsive';
import { Text } from '@visx/text';
import { pointRadial } from 'd3-shape';
import useForceUpdate from './utils/useForceUpdate';
import LinkControls from './utils/LinkControls';
import getLinkComponent from './utils/getLinkComponent';
import { data } from './data';
import {getBoundaries} from './utils/getBoundaries';

export type LinkTypesProps = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
};

export default function CockPit({
    width: totalWidth,
    height: totalHeight,
    margin = { top: 30, left: 30, right: 30, bottom: 70 },
}: LinkTypesProps) {
    const [layout, setLayout] = useState<string>('cartesian');
    const [orientation, setOrientation] = useState<string>('vertical');
    const [linkType, setLinkType] = useState<string>('step');
    const [stepPercent, setStepPercent] = useState<number>(0.5);
    const forceUpdate = useForceUpdate();
    const innerWidth = totalWidth - margin.left - margin.right;
    const innerHeight = totalHeight - margin.top - margin.bottom;
    const { origin, sizeWidth, sizeHeight } = getBoundaries(layout, orientation, innerWidth, innerHeight);
    const LinkComponent = getLinkComponent({ layout, linkType, orientation });

    return totalWidth < 10 ? null : (
        <div>
            <LinkControls
                layout={layout}
                orientation={orientation}
                linkType={linkType}
                stepPercent={stepPercent}
                setLayout={setLayout}
                setOrientation={setOrientation}
                setLinkType={setLinkType}
                setStepPercent={setStepPercent}
            />
            <ScaleSVG width={totalWidth} height={totalHeight}>
                <Group top={margin.top} left={margin.left}>
                    <Tree
                        root={hierarchy(data, d => (d.isExpanded ? null : d.children))}
                        size={[sizeWidth, sizeHeight]}
                        separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth}
                    >
                        {tree => (
                            <Group top={origin.y} left={origin.x}>
                                {tree.links().map((link, i) => (
                                    <LinkComponent
                                        key={i}
                                        data={link}
                                        percent={stepPercent}
                                        stroke="rgb(0,0,0,0.6)"
                                        strokeWidth="1"
                                        fill="none"
                                    />
                                ))}

                                {tree.descendants().map((node, key) => {
                                    const width = 200;
                                    const height = 120;
                                    const isRoot = node.depth === 0;

                                    let top: number;
                                    let left: number;
                                    if (layout === 'polar') {
                                        const [radialX, radialY] = pointRadial(node.x, node.y);
                                        top = radialY;
                                        left = radialX;
                                    } else if (isRoot) {
                                        console.log('isRoot')
                                        top = node.y + height / 2;
                                        left = node.x;
                                    } else if (orientation === 'vertical') {
                                        top = node.y;
                                        left = node.x;
                                    } else {
                                        top = node.x;
                                        left = node.y;
                                    }

                                    const repositioningCoords = {
                                        y: -height / 2,
                                        x: -width / 2
                                    }

                                    return (
                                        <Group top={top} left={left} key={key} >
                                            <rect
                                                width={width}
                                                height={height}
                                                {...repositioningCoords}
                                                style={{ fill: '#FFFFFF', stroke: '#CCC' }}
                                                rx={node.data.children ? 0 : 10}
                                                onClick={() => {
                                                    node.data.isExpanded = !node.data.isExpanded;
                                                    console.log(node);
                                                    forceUpdate();
                                                }}
                                            />
                                            <Group transform="translate(-100 -60) scale(0.66 0.66)">
                                                <Text transform="translate(19.1 29.21)" fontSize={20} fontWeight={800}>
                                                    {node.data.name}
                                                </Text>
                                                <path
                                                    d="M354.06,196.22a11.11,11.11,0,1,0,11.1,11.11A11.1,11.1,0,0,0,354.06,196.22Zm-.19,19.43a1.86,1.86,0,0,1,0-3.72,1.86,1.86,0,0,1,0,3.72Zm.69-5.88h-1.75c-.58-3.4,3.74-4.36,3.74-6.81,0-1.29-.91-2.3-2.64-2.3A4.41,4.41,0,0,0,350.8,202L349.62,201A6,6,0,0,1,354,199c2.67,0,4.46,1.47,4.46,3.74C358.49,206,354.15,206.68,354.56,209.77Z"
                                                    transform="translate(-83.17 -181.74)"
                                                    style={{ fill:'#030202'}}
                                                />
                                                <path
                                                    d="M121.46,226.22a15,15,0,1,0,15,15A15,15,0,0,0,121.46,226.22Zm.18,25.6-6.49-11.24h4.34v-8.74h4v8.74h4.64Z"
                                                    transform={`translate(-83.17 -181.74) ${node.data.percentage > 0 ? 'rotate(-180 122 241)' : ''}`}
                                                    style={{ fill: node.data.percentage > 0 ? 'green' : 'red' }}
                                                />
                                                <Text transform="translate(62.85 64.75)" fontSize={24} fontWeight={400} y={3} >
                                                    {`${node.data.percentage}%`}
                                                </Text>
                                                <text transform="translate(19.1 131.86)" >{node.data.range.initial.getFullYear()}</text>
                                                <text transform="translate(166.19 128.6)" >{node.data.range.final.getFullYear()}</text>
                                                <Text transform="translate(19.1 154.67)" fontWeight={800} >{`R$ ${node.data.amount.initial}`}</Text>
                                                <Text transform="translate(166.19 152.06)" fontWeight={800} >{`R$ ${node.data.amount.final}`}</Text>
                                            </Group>
                                        </Group>
                                    );
                                })}
                            </Group>
                        )}
                    </Tree>
                </Group>
            </ScaleSVG>
        </div>
    );
}
