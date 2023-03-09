import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
	const [open, setOpen] = useState(false)

	const [items, setItems] = useState([{label: 'LABEL', value: 'VALUE'}, {
		label: 'LABEL1',
		value: 'VALUE1'
	}, {label: 'LABEL2', value: 'VALUE2'}, {label: 'LABEL3', value: 'VALUE3'}, {
		label: 'LABEL4',
		value: 'VALUE4'
	}, {label: 'LABEL5', value: 'VALUE5'}, {label: 'LABEL6', value: 'VALUE6'}])
	const [value, setValue] = useState('')


	return (
		<View style={styles.container}>
			<ScrollView >
				<View style={{width: '100%'}} height={700}>
					<DropDownPicker setValue={setValue} value={value} items={items} open={open} setOpen={setOpen}
					                listMode={'SCROLLVIEW'} style={{width: 200}} containerStyle={{width: '100%'}}
					                dropDownContainerStyle={{backgroundColor: 'yellow'}}
					                listItemContainerStyle={{backgroundColor: 'red'}}/>
				</View>
			</ScrollView>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 100
	},
});
