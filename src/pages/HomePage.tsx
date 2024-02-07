import HomeLayout from "../layouts/HomeLayout";
import classes from '../styles/page/HomePage.module.css';

const HomePage = () => {
  return (
    <HomeLayout>
			<div className={classes.container}>
				<div className={classes.wrapper}>
					콘텐츠 고민1
				</div>
				<div className={classes.wrapper}>
					콘텐츠고민 2
				</div>
			</div>
		</HomeLayout>
  )
}

export default HomePage;