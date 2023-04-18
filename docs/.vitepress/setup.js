const grammar = [
    '词性、句子成分、句子结构',
    '时态语态',
    '主谓一致',
    '倒装',
    '',
    '',
    '',
    '',
    '名词性从句',
    '状语从句',
    '非谓语动词',
]

// const compose = (...fns) =>
//     fns.reduce(
//         (f, g) =>
//             (...args) =>
//                 f(g(...args))
//     )

export const sidebar = [
    {
        text: '词汇',
        collapsed: true,
        items: Array(19)
            .fill()
            .map((_, i) => ({
                text: `Unit ${i + 1}`,
                link: `/menu1/${i + 1}`,
            })),
    },
    {
        text: '语法',
        items: grammar.map((x, i) => ({
            text: x,
            link: `/menu2/${i + 1}`,
        })),
    },
    {
        text: '练习',
        items: grammar.map((x, i) => ({
            text: x,
            link: `/menu3/${i + 1}`,
        })),
    },
    {
        text: '作文',
        items: [1, 2, 3, 4, 5].map((x, i) => ({
            text: x,
            link: `/menu4/${i + 1}`,
        })),
    },
].map((x) =>
    Object.assign(x, {
        collapsible: true,
    })
)

export const nav = [
    {
        text: '@0.2.1-alpha',
        items: [
            {
                text: '变更日志',
                link: 'https://github.com/AaaXya/StudyEnglish/commits/master',
            },
            { text: '贡献', link: '/guide/' },
        ],
    },
]
export const socialLinks = [{ icon: 'github', link: 'https://github.com/AaaXya/StudyEnglish' }]
