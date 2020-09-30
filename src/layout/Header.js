import { AppBar, Toolbar } from '@material-ui/core';
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';
import HeaderLogin from '../core/components/authentication/HeaderLogin';

class Header extends Component {
    render() {
        //console.log('props: ', this.props);
        const { t } = this.props;

        return (
            <AppBar>
                <Toolbar>
                    <h3>{t('header.title')}</h3>
                    <Link to="/" className="link">{t('header.home')}</Link>
                    <Link to="/rooms/list" className="link">{t('header.rooms')}</Link>
                    <Link to="/rooms/add" className="link">{t('header.add')}</Link>
                    <HeaderLogin ageCapitaine="42"></HeaderLogin>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withTranslation()(withRouter(Header));
