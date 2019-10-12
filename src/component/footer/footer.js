import React, { Fragment } from 'react';
import './footer.scss';
import Grid from '@material-ui/core/Grid';

const Footer = (props) => {
    return (
        <Fragment>
            <div className="footer">
                <Grid container >
                    <Grid item xs={4}  >
                        <div className="about">
                            <h4>About ABC</h4>
                            <p className="about-para ">
                            MakeMyTrip uses a real-time reservation database used worldwide to list flight tickets prices and availability. As airline tickets are sold or fares are changed dynamically, the flight ticket booking database gets updated to immediately reflect those changes. Hence, always make sure to double-check online flight booking prices when purchasing plane tickets, as the airfare may have changed since you first searched for fares or created your itinerary.
                            </p>
                        </div>

                    </Grid>
                    <Grid item xs={7}  >
                        <div className="contact">
                            <h4>Contact us</h4>
                            <ul>
                                <li>Phone Number : 90999999999</li>
                                <li>Headquarter : India</li>
                            </ul>
                        </div>

                    </Grid>
                    <Grid item xs={1}  ></Grid>
                </Grid>
            </div >
        </Fragment>
    );
};

export default Footer;
