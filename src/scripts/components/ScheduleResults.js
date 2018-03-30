import React, { Component } from 'react';
import Loader from './Loader';

class ScheduleResults extends Component {

	renderLoading() {
		return (
			<Loader />
		);
	}

	renderContent(data) {
		let dates = data.map((date) => {
			let games = date.games.map((game, i) => {
					let classGameStatus = '';

					if (game.gameState.includes("Final")) {
						if (game.teams.home.score > game.teams.away.score) {
							classGameStatus = 'is-home-winner';
						} else {
							classGameStatus = 'is-away-winner';
						}
					} else if (game.gameState === "Preview") {
						classGameStatus = 'is-preview';
					}

					return (
						<li key={game.id} className={classGameStatus}>
							<a href={`/game/${game.id}`}>
								<div className="game-state">{game.gameState}</div>
								<div className="team-row team-away">
									<span className="team-name">{game.teams.away.name}
										<span className="team-record">({game.teams.away.record})</span>
									</span>
									<span className="team-score">{game.teams.away.score}</span>
								</div>
								<div className="team-row team-home">
									<span className="team-name">{game.teams.home.name}
										<span className="team-record">({game.teams.home.record})</span>
									</span>
									<span className="team-score">{game.teams.home.score}</span>
								</div>
							</a>
						</li>
					)
			});

			return (
				<div key={date.date}>
					<h3>{date.date}</h3>
					<ul className="schedule-results">
						{games}
					</ul>
				</div>
			)
		});

		return (
			<div className="schedule-container">
				{dates}
			</div>
		);
	}

	render() {
		let data = this.props.scheduleGames;

		if (data.length || Object.keys(data).length) {
			return this.renderContent(data);
		}

		return this.renderLoading();
	}
}

export default ScheduleResults;