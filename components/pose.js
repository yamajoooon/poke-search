import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import styles from './layout.module.css'
 

const pages = [
  ({ style }) => <animated.div style={{ ...style }}>
                    <img src="/pokeback/pokego1.jpg"/>
                 </animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>
                    <img src="/pokeback/pokego2.jpg"/>
                 </animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>
                    <img src="/pokeback/pokego3.jpg"/>
                 </animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>
                    <img src="/pokeback/pokego4.jpg"/>
                </animated.div>
]

export default function Example() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <>
    <div className = "out">
        <div className = "root">
            <div className={styles.simpletransmain} onClick={onClick}>
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                })}
            </div>
        </div>
    </div>

    <style jsx>{`
        .out{
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
              segoe ui, arial, sans-serif;
            background: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: default;
          }
        .root{
            overflow: hidden;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
              
        }

       
    `}</style>
    </>
  )
}

