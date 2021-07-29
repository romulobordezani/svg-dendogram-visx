export interface TreeNode {
    name: string;
    isExpanded?: boolean;
    children?: TreeNode[];
    percentage: number;
    range: {
        initial: Date;
        final: Date;
    }
    amount: {
        initial: number;
        final: number;
    }
}