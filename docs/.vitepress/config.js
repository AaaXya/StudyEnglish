import * as ambientConfig from './setup.js'
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
        ...ambientConfig,
        editLink: {
            pattern: 'https://github.com/AaaXya/StudyEnglish/tree/master/docs/:path',
            text: '在 GitHub 上编辑此页面',
        },
        lastUpdatedText: '最近更新时间',
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright © 2022.11 - ${new Date().getFullYear()}.${
                new Date().getMonth() + 1
            }`,
        },
    },
    markdown: {
        lineNumbers: true,
    },
}
