import React from 'react';
import Typography from '@material-ui/core/Typography';
import withHocs from './TabsHoc';
import Contacts from "../Contacts/Contacts";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

const TabContainer = ({ children, dir }) => (
    <Typography component="div" dir={dir} style={{ paddingLeft: 8 * 3, paddingRight: 8 * 3, paddingTop: 8 * 3, height: '100%'}}>
        {children}
    </Typography>
);

class SimpleTabs extends  React.Component {
    state = {
        value: 0,
        open: false,
    };
    handleChange = (event, value) => { this.setState({ value }); };

    render()
    {
        const { 
            // classes, 
            theme } = this.props;
        const { 
            // open, 
            value } = this.state;
        return (
            <>
                <Tabs variant='scrollable' value={value} onChange={this.handleChange}>
                    {/*For tabs*/}
                    <Tab label="Example" />
                </Tabs>
                <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={this.handleChangeIndex} >
                    {/*Connect with tabs*/}
                    <TabContainer dir={theme.direction}><Contacts /></TabContainer>
                </SwipeableViews>
            </>
        );
    }
}

export default withHocs(SimpleTabs);