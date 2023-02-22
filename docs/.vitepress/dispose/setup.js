const sidebarGrammar = {
    1: '词性、句子成分、句子结构',
    2: '时态语态',
    3: '主谓一致',
    4: '倒装',
    9: '名词性从句',
    10: '状语从句',
    11: '非谓语动词',
}
const outputItems = (list, map) => {
    if (Array.isArray(map)) {
        return new Array(map[0])
            .fill(0)
            .reduce(
                (a, _, i) => a.concat({ text: map[1](i + 1), link: `/menu${list}/${i + 1}` }),
                []
            )
    }
    let res = []
    for (const key in map) {
        res.push({ text: map[key], link: `/menu${list}/${key}` })
    }
    return res
}
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
            items: outputItems(1, [19, (x) => `Unit ${x}`]),
        },
        {
            text: '语法',
            items: outputItems(2, sidebarGrammar),
        },
        {
            text: '练习',
            items: outputItems(3, sidebarGrammar),
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
