import React from 'react';
import { View , Text , Share , Clipboard , ToastAndroid , TouchableOpacity } from 'react-native';

function chunk(str, n) {
    var ret = [];
    var i;
    var len;

    for(i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n))
    }

    return ret
};

chunk("The quick brown fox jumps over the lazy dogs.", 5).join('$');

var utf8ToBin = function( s ){
	s = unescape( encodeURIComponent( s ) );
	var chr, i = 0, l = s.length, out = '';
	for( ; i < l; i ++ ){
		chr = s.charCodeAt( i ).toString( 2 );
		while( chr.length % 8 != 0 ){ chr = '0' + chr; }
		out += chr;
	}
	return chunk(out,8).join('     ');
};
var binToUtf8 = function( s ){
	var i = 0, l = s.length, chr, out = '';
	for( ; i < l; i += 8 ){
		chr = parseInt( s.substr( i, 8 ), 2 ).toString( 16 );
		out += '%' + ( ( chr.length % 2 == 0 ) ? chr : '0' + chr );
	}
	return chunk(decodeURIComponent( out ),8).join('\n');
};


export default class Curse extends React.Component {
    constructor(props) {
        super(props)
    }

    async onShare() {
        await Clipboard.setString(utf8ToBin(this.props.navigation.getParam('curse', '')))
        ToastAndroid.show('فحش کپی شد',1300)
    }

    render() {
        return (
            <View>
                <Text style={{textAlign:'center',fontSize:28,marginTop: 25}}>
                    {this.props.navigation.getParam('curse', '')}
                </Text>
                <TouchableOpacity onPress={() => this.onShare()}>
                    <Text style={{textAlign:'center',fontSize:26,marginTop: 25}}>
                        {utf8ToBin(this.props.navigation.getParam('curse', ''))}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}