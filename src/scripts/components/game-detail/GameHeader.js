import React, { Component } from 'react';
import Loader from '../Loader';
import Logo from '../Logo';

class GameHeader extends Component {

	renderLoading() {
		return (
			<Loader />
		);
	}

	renderContent(data) {
		return (
			<header className="game-header">
				<div className="col game-header-date-info">
					<span className="game-header-date">{data.date}</span>
					{
						data.isPreview &&
						<span className="game-header-time">{data.gameStatus}</span>
					}
				</div>
				<div className="col game-header-team away">
					<Logo teamId={data.teams.away.id} />
					<div className="game-header-team-info">
						<span className="game-header-city">{data.teams.away.city}</span>
						<span className="game-header-name">{data.teams.away.name}</span>
						<span className="game-header-record">{data.teams.away.record}</span>
					</div>
					{
						!data.isPreview &&
						<div className="game-header-score">{data.teams.away.score}</div>
					}
				</div>
				<div className="col game-header-team home">
					<Logo teamId={data.teams.home.id} />
					<div className="game-header-team-info">
						<span className="game-header-city">{data.teams.home.city}</span>
						<span className="game-header-name">{data.teams.home.name}</span>
						<span className="game-header-record">{data.teams.home.record}</span>
					</div>
					{
						!data.isPreview &&
						<div className="game-header-score">{data.teams.home.score}</div>
					}
				</div>
			</header>
		);
	}

	render() {
		let data = this.props.gameDetail;

		if (data.length || Object.keys(data).length) {
			return this.renderContent(data);
		}

		return this.renderLoading();
	}
}

export default GameHeader;
