import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import Wallet from '../components/Wallet'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushi.map(sushi => {
           return <Sushi eatSushi={props.eatSushi} key={sushi.id} sushi={sushi}/>
         })
        }
        <MoreButton fetchSushi={props.fetchSushi}/>
        <Wallet addCash={props.addCash}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer