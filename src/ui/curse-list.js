import React from 'react';
import { View , Text , ScrollView } from 'react-native';
import curses from './../curses';
import CurseListItem from './curse-list-item';

export default class Landing extends React.Component {
    
    renderItem() {
        return curses.curses.map((item,index) => {
            return <CurseListItem key={index} navigation={this.props.navigation} curse={item} />
        })
    }

    render() {
        return (
            <ScrollView>
                {this.renderItem()}
            </ScrollView>
        )
    }
}