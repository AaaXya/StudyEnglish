/* const [vx, qq] = [
    {
        icon: {
            svg: `<svg t="1668871680042" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3564" width="200" height="200"><path d="M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528C163.2 94.912 0 230.656 0 403.136c0 99.52 54.272 181.248 145.024 244.736L108.8 756.864l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.04-24.256-11.2-49.6-11.2-76.032C385.088 475.776 521.024 347.264 693.12 347.264zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312C443.968 266.944 471.168 249.024 498.304 249.024zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248S289.92 266.944 289.92 294.272C289.92 321.408 271.872 339.584 244.672 339.584zM1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.728 783.872 1024 711.488 1024 629.76zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224C661.504 566.464 643.648 584.384 616.128 584.384zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224C860.864 566.464 842.752 584.384 815.488 584.384z" p-id="3565"></path></svg>`,
        },
        link: '',
    },
    {
        icon: {
            svg: `<svg t="1668872160608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5835" width="200" height="200"><path d="M866.991 707.772c0 0-25.341 69.55-71.877 132.071 0 0 83.050 28.439 76.137 102.196 0 0 2.709 82.331-177.613 76.685 0 0-126.817-9.898-164.88-63.85h-33.53c-38.018 54.006-164.834 63.85-164.834 63.85-180.431 5.7-177.556-76.685-177.556-76.685-7.025-73.756 76.081-102.196 76.081-102.196-46.475-62.519-71.875-132.071-71.875-132.071-112.759 183.141-101.477-25.567-101.477-25.567 21.141-123.495 109.949-204.384 109.949-204.384-12.677-112.157 33.805-132.078 33.805-132.078 9.68-346.979 306.473-340.887 312.675-340.722 6.249-0.163 302.931-6.256 312.72 340.723 0 0 46.538 19.866 33.812 132.078 0 0 88.751 80.89 109.886 204.384 0.055-0.001 11.285 208.707-101.421 25.566v0 0z" p-id="5836"></path></svg>`,
        },
        link: '',
    },
]; */
const sidebarGrammar = {
    1: '词性、句子成分、句子结构',
    2: '时态语态',
    3: '主谓一致',
    9: '名词性从句',
    10: '状语从句',
};
const outputItems = (list, map) => {
    return Array.isArray(map)
        ? map.reduce((a, b, i) => a.concat({ text: b, link: `/menu${list}/${i + 1}` }), [])
        : Object.keys(map).reduce(
              (a, b) => a.concat({ text: map[b], link: `/menu${list}/${b}` }),
              []
          );
};
export default {
    title: 'ENATE',
    description: '英语笔记，个人笔记记录',
    lang: 'zh-CN',
    // head: [['script', { src: './loading.js', type: 'text/javascript' }]],
    lastUpdated: true,
    themeConfig: {
        logo: '/flower.svg',
        outlineTitle: '目录',
        outline: [2, 3],
        nav: [
            { text: 'test', link: '/guide/' },
            {
                text: 'contact',
                items: [
                    {
                        text: '变更日志',
                        link: 'https://github.com/AaaXya/StudyEnglish/commits/master',
                    },
                    { text: '贡献', link: '/guide/' },
                ],
            },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/AaaXya/StudyEnglish' }],
        sidebar: [
            {
                text: '词汇',
                collapsed: true,
                items: outputItems(
                    1,
                    new Array(19).fill(1).map((x, i) => `Unit ${x + i}`)
                ),
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
                items: [
                    { text: 'null', link: '/menu4/1' },
                    { text: 'null', link: '/menu4/2' },
                ],
            },
            {
                text: 'code tests unrelated to en',
                collapsed: true,
                items: [
                    { text: 'null', link: '/menu0/1' },
                    { text: 'null', link: '/menu0/2' },
                ],
            },
        ].map((x) =>
            Object.assign(x, {
                collapsible: true,
            })
        ),
        editLink: {
            pattern: '/guide/',
            text: '编辑此页面',
        },
        lastUpdatedText: '最近更新时间',
        footer: {
            message:
                'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright:
                'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>',
        },
    },
    markdown: {
        lineNumbers: true,
    },
};
