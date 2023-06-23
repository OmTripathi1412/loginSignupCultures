import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

let UserData = [
  {
    id: 1,
    name: 'Chandrakant Agrawal',
    role: 'founder',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 2,
    name: 'Garima Agrawal',
    role: 'Executive Assistant',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 3,
    name: 'Gujan Goyal',
    role: 'Executive Assistant',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 4,
    name: 'Manisha Mishra',
    role: 'HR & Admin',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 5,
    name: 'Abhishek Kumar Pandit',
    role: 'Lead Frontend Developer',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 6,
    name: 'Syed Affan',
    role: 'Frontend Intern',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 7,
    name: 'Neha Rani',
    role: 'UI Designer',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 8,
    name: 'Neha Chand',
    role: 'UI Designer',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 9,
    name: 'Raghuveer',
    role: 'UI Designer',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 10,
    name: 'Neha Rani',
    role: 'UI Designer',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 7,
    name: 'Neha Rani',
    role: 'UI Designer',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 7,
    name: 'Neha Rani',
    role: 'UI Designer',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
  {
    id: 7,
    name: 'Neha Rani',
    role: 'UI Designer',
    joiningDate: '21 nov 2022',
    EmployeeCode: 2111000,
    Designation: 'Founder',
    Department: 'Management',
    PhoneNo: 7218600000,
    Email: 'ck@gmail.com',
    location: 'Head Office',
    BusinessFunction: 'Corporate',
  },
];

const Dashboard = props => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    console.log(text, ' this is text');
    if (text == ' ') {
      UserData = UserData;
      setSearchText('');
    }
    setSearchText(text);
    searchTextConfirm();
  };

  const searchTextConfirm = () => {
    console.log('Hello', searchText);
    UserData = UserData.filter(value => {
      console.log(
        value.name,
        value.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      return (
        value.name.toLowerCase() === searchText.toLowerCase() ||
        value.role.toLowerCase() === searchText.toLowerCase() ||
        value.name.toLowerCase().includes(searchText.toLowerCase()) ||
        value.role.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    // UserData = UserData.filter(value => {
    //   console.log(value.name);
    //   return value.role === searchText;
    // });
    // setSearchText('');
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../assets/backArrow.png')}
          />
        </TouchableOpacity>
        <TextInput
          placeholder={'Search here'}
          value={searchText}
          onChangeText={text => {
            handleSearch(text);
          }}
          //   placeholderTextColor={}
          style={styles.input}
        />
      </View>
      <ScrollView style={styles.verticalScroll}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.horizontalScroll}>
          <View style={styles.headerView}>
            <View style={styles.textView}>
              <Text style={styles.NameText}>Name</Text>
              <Text style={styles.RoleText}>Role</Text>
              {UserData.map((index, value) => {
                console.log(value);
                return (
                  <View style={{marginVertical: 16}}>
                    <Text
                      style={{color: 'black', fontWeight: '500', fontSize: 16}}>
                      {index.name}
                    </Text>
                    <Text>{index.role}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.textView}>
              <Text style={styles.NameText}>Joining Date</Text>
              <Text style={styles.RoleText}>EmployeeCode</Text>
              {UserData.map((index, value) => {
                console.log(value);
                return (
                  <View style={{marginVertical: 16}}>
                    <Text
                      style={{color: 'black', fontWeight: '500', fontSize: 16}}>
                      {index.joiningDate}
                    </Text>
                    <Text>{index.EmployeeCode}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.textView}>
              <Text style={styles.NameText}>Designation</Text>
              <Text style={styles.RoleText}>Department</Text>
              {UserData.map((index, value) => {
                console.log(value);
                return (
                  <View style={{marginVertical: 16}}>
                    <Text
                      style={{color: 'black', fontWeight: '500', fontSize: 16}}>
                      {index.Designation}
                    </Text>
                    <Text>{index.Department}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.textView}>
              <Text style={styles.NameText}>PhoneNo</Text>
              <Text style={styles.RoleText}>Email</Text>
              {UserData.map((index, value) => {
                console.log(value);
                return (
                  <View style={{marginVertical: 16}}>
                    <Text
                      style={{color: 'black', fontWeight: '500', fontSize: 16}}>
                      {index.PhoneNo}
                    </Text>
                    <Text>{index.Email}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>

        <View
          style={{marginBottom: Dimensions.get('screen').width * 0.3}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  header: {
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 1,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#s000',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: Dimensions.get('screen').height * 0.05,
    // marginTop: Dimensions.get('screen').height * 0.05,
    margin: 12,
    // borderWidth: 1,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 32,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 10,
    fontWeight: '500',
    fontSize: 16,
    color: '#8c6981',
    // left: 16,
  },
  verticalScroll: {
    height: Dimensions.get('screen').height * 1,
    width: Dimensions.get('screen').width * 1,
  },
  horizontalScroll: {
    // flexDirection: 'row',
    // height: Dimensions.get('screen').height * 1,
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    // marginHorizontal:16
  },
  RoleText: {
    color: 'gray',
    fontWeight: '400',
    fontSize: 14,
  },
  NameText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  textView: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
});
