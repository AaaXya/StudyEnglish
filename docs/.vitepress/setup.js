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
// Array.prototype.to = function (...f) {
//     return this.map((...x) => {
//         let fn = 0
//         while (f.length > fn) {
//             x[0] = f[fn++](...x)
//         }
//         return x[0]
//     })
// }
// console.log(
//     Array(19)
//         .fill()
//         .to(
//             (_, i) => `Unit ${i + 1}`,
//             (x, i) => ({
//                 text: x,
//                 link: `/menu1/${i + 1}`,
//             })
//         )
// )

export const sidebar = [
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
