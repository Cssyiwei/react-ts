import * as React from 'react'

import {ComponentExt} from '@utils/reactExt'

import * as styles from './index.scss'

class Home extends ComponentExt {
    render() {
        return (
            <div className={styles.page}>Home</div>
        )
    }
}
export default Home