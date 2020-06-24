import * as React from 'react'

// import 'antd/lib/button/style/index.less'
// @log
// class Test extends React.Component {
//     render() {
//         return (
//             <div>Test</div>
//         )
//     }
// }
// function log(target: any){
//     console.log(target);
// }
// export default Test
// import * as styles from './index.scss'
import {Button} from 'antd';

import { ComponentExt } from '@utils/reactExt'

class Test extends ComponentExt {
    showMsg = () => {
        this.$message.success('这是一个通知')
    }
    render(){
        return (
            <div className="wrapper">

                <Button onClick={this.showMsg} type="primary">button</Button>
                
            </div>
        )
    }
}
export default Test