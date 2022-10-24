import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "../Pagination";
import Carousel from "./Carousel.module.css";
import Grid from "@mui/material/Grid";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const random = Math.floor(Math.random() * 500);

const styles = {
	root: {
		position: "relative",
		width:"100%",
	},
	slideContainer: {
        
	},
	slide: {
		padding: 0,
		minHeight: 100,

		color: "#fff",
	},
	slide1: {
		backgroundColor: "#FEA900",
	},
	slide2: {
		backgroundColor: "#B3DC4A",
	},
	slide3: {
		backgroundColor: "#6AC0FF",
	},
};

class CarouselView extends React.Component {
	state = {
		index: 0,
	};

	handleChangeIndex = index => {
		this.setState({
			index,
		});
	};

	render() {
		const { index } = this.state;

		return (
			<Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }} sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
				
				<Grid item xs={12}>
					<div style={styles.root}>
						<AutoPlaySwipeableViews
							index={index}
							onChangeIndex={this.handleChangeIndex}
							enableMouseEvents
							interval={3000}					
						>
							<div style={Object.assign({}, styles.slide, styles.slide1)}>
								<p>slide n°1</p>
								<img className={Carousel.imgControl} src={`https://picsum.photos/id/${random}/5000/1000?grayscale`}/>
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide2)}>
								<p>slide n°2</p>
								<img className={Carousel.imgControl} src={`https://picsum.photos/id/${random}/5000/1000`}/>
							</div>
							<div style={Object.assign({}, styles.slide, styles.slide3)}>
								<p>slide n°3</p>
								<img className={Carousel.imgControl} src={`https://picsum.photos/id/${random}/5000/1000?blur=2`}/>
							</div>
						</AutoPlaySwipeableViews>
						<Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
					</div>
				</Grid>
				
			</Grid>
		);
	}
}

export default CarouselView;