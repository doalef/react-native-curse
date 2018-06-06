import React from 'react';
import { View , Text , TouchableOpacity } from 'react-native';

export default class CurseListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity 
            onPress={() => {this.props.navigation.navigate('curse',{curse: this.props.curse})}}>
                <View 
                style={{justifyContent: 'center',paddingVertical: 20 ,backgroundColor: '#f5f5f5',borderWidth: 1,borderTopColor: 'transparent'}}
                >
                    <Text 
                    style={{textAlign: 'right',fontSize:25,marginRight: 20}}
                    >
                        {this.props.curse}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}