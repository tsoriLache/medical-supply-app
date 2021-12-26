import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


const DeleteBtn = ({index,onCLick}:{index:number,onCLick:unknown}) => 
 (
      <Button animated style={{width:'100%',background:'transparent'}}>
        <Button.Content style={{'fontSize':'large','marginLeft':'10%'}} visible>{index}</Button.Content>
        <Button.Content hidden onClick={onCLick}>
          <Icon name='delete' style={{fontSize:'large'}}/>
        </Button.Content>
      </Button>
  )

export default DeleteBtn