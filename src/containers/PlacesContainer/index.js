import * as React from 'react';
import {connect} from 'react-redux';
import Places from '../../screens/Places';

export interface Props {
    navigation: any;
    data: Object;
}

export interface State {
}

class PlacesContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.goToPlaceDetail = this.goToPlaceDetail.bind(this);
    }

    goToPlaceDetail = () => {
        this.props.navigation.navigate('PlaceDetail');
    }

    render() {
        return (
            <Places
                navigation={this.props.navigation}
                goToPlaceDetail={this.goToPlaceDetail}
            />
        );
    }
}

function bindAction(dispatch) { // eslint-disable-line
    return {};
}

const mapStateToProps = state => ({}); // eslint-disable-line
export default connect(mapStateToProps, bindAction)(PlacesContainer);
