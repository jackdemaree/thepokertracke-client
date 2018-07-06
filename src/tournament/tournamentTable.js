import React from 'react';
import { Table, Button } from 'reactstrap';


const TournamentTable = (props) => {

    return (
        <div>
            <h3>Poker History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Game</th>
                        <th>BuyIn</th>
                        <th>Finish</th>
                        {/* <th>Date</th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tournament.map((tournament, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{tournament.id}</th>
                                    <td>{tournament.game}</td>
                                    <td>{tournament.buyIn}</td>
                                    <td>{tournament.finish}</td>
                                    <td>
                                        <Button id={tournament.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={tournament.id} onClick={e => props.update(e, tournament)} color="warning">        Edit  </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default TournamentTable;