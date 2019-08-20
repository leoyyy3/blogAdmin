import layout from '@/components/layout'
import home from '@/pages/home'
import addArticle from '@/pages/addArticle'

export let config = [
    {
        path: '/',
        name: 'layout', 
        component: layout,
        meta:{
            rname: '首页',
            pname:'',
            level:1
        },
        children:[
            {
                path: '/article/list',
                name: 'ARTICLELIST', 
                component: home,
                level:1,
                meta:{
                    pname: '首页',
                    rname: '',
                    level:1
                }
            },
            {
                path: '/article/add',
                name: 'ADDARTICLE', 
                component: addArticle,
                level:1,
                meta:{
                    pname: '首页',
                    rname: '',
                    level:1
                }
            },
        ]
    }
]