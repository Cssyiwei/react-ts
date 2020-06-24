import * as React from 'react'

import * as ReactDOM from 'react-dom'

import {configure} from 'mobx'

import {Provider} from 'mobx-react'

import * as style from './index.scss'

import Test from '@components/Test'

import Counter from '@views/Counter'

import App from '@shared/App'

import * as store from './store'

configure({enforceActions: 'observed'})

const render = () => {
    ReactDOM.render(
        (<Provider {...store}>
            {/* <h1 className={style.title}>标题</h1> */}
            {/* <Test /> */}
            <App />
        </Provider>),
        document.querySelector('#app')
    )
}

render()