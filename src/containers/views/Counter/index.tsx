import * as React from 'react'

import {ComponentExt} from '@utils/reactExt'

import IconAddFriend from '@svg/demo.svg'

import { inject, observer } from 'mobx-react'

import { hot } from 'react-hot-loader'

// interface IGlobalStore {
//     increase: () => void
//     decrease: () => void
//     num: number
// }

interface IProps {
    globalStore?: IGlobalStore.GlobalStore
}

@hot(module)
@inject('globalStore')
@observer

class Counter extends ComponentExt<IProps> {
    increase = () => {
        this.props.globalStore.increase(1)
    }
    decrease = () => {
        this.props.globalStore.decrease(2)
    }
    render() {
        const {num} = this.props.globalStore
        return  (
            <div>
                <div>{num}</div>
                <button onClick={this.increase}>增加+</button>
                <button onClick={this.decrease}>减少-</button>
                <div>
                    <IconAddFriend color="red" />
                </div>
            </div>
        )
    }
}
export default Counter