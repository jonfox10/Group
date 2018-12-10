import React, { Component } from "react";
import { Modal, Button, Card, Icon, Avatar } from "antd";
import "../../scss/App.scss";
import Axios from "axios";
const {Meta} = Card; //This is for the antD "card" title and game info

class GameList
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleDelete = () => {
    console.log("DON'T BE UNDEFINED:", this.props.games )
    let {game_id, game_name} = this.props.games;
    Axios.delete(`/api/game/${game_id}/${game_name}`)
  };

  render() {
    console.log(this.props)
    let gameCard = this.props.games.map(game =>{
      return (
        <div>
          <Card
            style={{ width: 300 }}
            cover={<img alt="game image" src={game.image} />}
            actions={[
              <button style={{backgroundColor: "transparent", border: "0px", paddingLeft: '0'}}> <Icon type="caret-right" /></button>, 
              <button style={{backgroundColor: "transparent", border: "0px", paddingLeft: '0'}}><Icon type="edit" /></button>, 
              <button style={{backgroundColor: "transparent", border: "0px", paddingLeft: '0'}} onClick={this.handleDelete}><Icon type="delete" /></button>]}
            hoverable>
          <Meta title={game.game_name}
                description={game.subject}/>
          </Card>
          
        </div>
      )
    })

    return (
      <div>
      {gameCard}
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '20px'}}>
                    
          {/* <Card title="Card title">Card content</Card> */}
        </div>
      </div>
    );
  }
}

export default GameList;
