const sidebarGrammar = {
    1: '词性、句子成分、句子结构',
    2: '时态语态',
    3: '主谓一致',
    4: '倒装',
    9: '名词性从句',
    10: '状语从句',
    11: '非谓语动词',
}

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
const outputItems = (arr, operation) => {
    arr.map(operation)
}
console.log(
    outputItems(grammar, (x, i) => ({
        text: x,
        link: `/menu3/list${i + 1}`,
    }))
)
export default {
    nav: [
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
    ],
    sidebar: [
        {
            text: '词汇',
            collapsed: true,
            items: Array(19)
                .fill()
                .map((_, i) => `Unit ${i + 1}`)
                .map((x, i) => ({
                    text: x,
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
            items: [{ text: 'null', link: '/menu4/1' }],
        },
    ].map((x) =>
        Object.assign(x, {
            collapsible: true,
        })
    ),
    socialLinks: [{ icon: 'github', link: 'https://github.com/AaaXya/StudyEnglish' }],
}
