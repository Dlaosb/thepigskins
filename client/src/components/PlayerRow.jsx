import React, { Component } from 'react';

const PlayerRow = (props) => {
  console.log('inside player row, player object is : ',props.playerData)
  const playerSchema = ['name','team','position','completionPercentage',
  'ydsThrown','tdThrows','intThrows','rushAtt','ydsRush','receptions',
  'ydsReception','tdReceptions','targetReception','twoPt','fumble','tdDefense'];
  const row = props.playerData ? playerSchema.map((datum) => {
    return <td>{props.playerData[datum]}</td>
  }) : '';
  return (
    <tr>{row}<button onClick={() => props.deletePlayer(props.index)}>remove player</button></tr>
  )
}

export default PlayerRow;
