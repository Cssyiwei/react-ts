import React from  'react'

import {ComponentExt} from '@utils/reactExt'

import { Link } from "react-router-dom";

import * as styles from './index.scss'
class Bottom extends ComponentExt {
    constructor(){
        super()

        this.state = {
            bottomArr:[
                {
                    name: '首页',
                    path: '/home'
                },
                {
                    name: '基金',
                    path: '/fund'
                },
                {
                    name: '资产',
                    path: '/capital'
                },
                {
                    name: '我的',
                    path: '/mine'
                },
            ]
        }
    }
    render() {
        return (
            <div className={styles.warpper}>
                {this.state.bottomArr.map(item => (
                    <div className={styles.item} key={item.path}>
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default Bottom