import React, { Component } from 'react';

class GameDetailBoxScore extends Component {

	getPeriodGoals(data) {
		let goals = _.map(data, (goal) => {
			return <span key={Math.random()} className="item goals">{goal}</span>
		})

		return(
			<div className="period">
				{goals}
			</div>
		)
	}

	render() {
		let data = this.props.gameDetail;

		return (
			<header className="game-detail-boxscore">
				<div className="col teams">
					<span className="item status">{data.status}</span>
					<span className="item name">{data.teamAwayName}</span>
					<span className="item name">{data.teamHomeName}</span>
				</div>
				{
					_.map(data.periodGoals, (periods) => {
						return(
							<div key={Math.random()} className="col periods">
								{this.getPeriodGoals(periods)}
							</div>
						)
					})
				}
			</header>
		);
	}
}

export default GameDetailBoxScore;
