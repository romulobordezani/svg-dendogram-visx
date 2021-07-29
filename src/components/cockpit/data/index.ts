import { TreeNode } from '../../../types/TreeNode';

export const data: TreeNode = {
    name: 'Total',
    amount: {
        initial: 1000001,
        final: 20000002
    },
    range: {
        initial: new Date('2019-01-02'),
        final: new Date('2020-01-02'),
    },
    percentage: 10,
    children: [
        {
            name: 'Loja',
            amount: {
              initial: 3000003,
              final: 400000044
            },
            range: {
                initial: new Date('2019-01-02'),
                final: new Date('2020-01-02'),
            },
            percentage: -20,
            children: [
                {
                    name: 'Boticario',
                    amount: {
                        initial: 5000005,
                        final: 60000006
                    },
                    range: {
                        initial: new Date('2019-01-02'),
                        final: new Date('2020-01-02'),
                    },
                    percentage: -30,
                },
                {
                    name: 'Quem Disse Berenice',
                    amount: {
                        initial: 7000007,
                        final: 80000008
                    },
                    range: {
                        initial: new Date('2019-01-02'),
                        final: new Date('2020-01-02'),
                    },
                    percentage: -40,
                },
                {
                    name: 'O.U.I',
                    amount: {
                        initial: 9000009,
                        final: 1000000001
                    },
                    range: {
                        initial: new Date('2019-01-02'),
                        final: new Date('2020-01-02'),
                    },
                    percentage: 50,
                },
            ],
        },
        {
            name: 'Venda Direta',
            amount: {
                initial: 2000002,
                final: 301233400
            },
            range: {
                initial: new Date('2019-01-02'),
                final: new Date('2020-01-02'),
            },
            percentage: -60,
        },
    ],
};