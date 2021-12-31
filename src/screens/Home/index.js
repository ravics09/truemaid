import React, {useState, useEffect, Fragment} from 'react';
import {Input, Avatar} from 'react-native-elements';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import * as FilterImage from './../../utils/constant';

const pragati = require('./../../assets/images/algolia/women/pragati.png');
const fanette = require('./../../assets/images/algolia/women/fanette.png');
const lucas = require('./../../assets/images/algolia/men/lucas.png');
const alexs = require('./../../assets/images/algolia/men/alexs.png');

const maidData = [
  {
    key: '1',
    name: 'House Maids',
    salary: '15000',
    uri: `${FilterImage.HouseMaid}`,
    filterName: 'housemaid',
  },
  {
    key: '2',
    name: 'Kitchen Staff',
    salary: '20000',
    uri: `${FilterImage.Cooking}`,
    filterName: 'cook',
  },

  {
    key: '3',
    name: 'Baby Sitters',
    salary: '12000',
    uri: `${FilterImage.Childcare}`,
    filterName: 'childcare',
  },
  {
    key: '4',
    name: 'Elderly Care',
    salary: '9000',
    uri: `${FilterImage.Elderlycare}`,
    filterName: 'elderlycare',
  },
  {
    key: '5',
    name: 'Gardener',
    salary: '10500',
    uri: `${FilterImage.Gardener}`,
    filterName: 'gardener',
  },
];

const userDataa = [
  {
    email: 'melissa.fleming@example.com',
    gender: 'female',
    work: 'housemaid',
    salary: '13040',
    phone_number: '0740-304-475',
    birthdate: 469521368,
    location: {
      street: '3655 manchester road',
      city: 'winchester',
      state: 'berkshire',
      postcode: '560036',
    },
    username: 'goldenkoala410',
    password: 'sick',
    first_name: 'melissa',
    last_name: 'fleming',
    title: 'miss',
    picture: `${pragati}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'housemaid',
    salary: '15500',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 455001,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'christoffer',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${fanette}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'cook',
    salary: '13900',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'Lucas',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${lucas}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'cook',
    salary: '12500',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'Alexs',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${alexs}`,
  },
  {
    email: 'melissa.fleming@example.com',
    gender: 'female',
    work: 'childcare',
    salary: '16300',
    phone_number: '0740-304-475',
    birthdate: 469521368,
    location: {
      street: '3655 manchester road',
      city: 'winchester',
      state: 'berkshire',
      postcode: 'YB2 8EJ',
    },
    username: 'goldenkoala410',
    password: 'sick',
    first_name: 'melissa',
    last_name: 'fleming',
    title: 'miss',
    picture: `${pragati}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'gardener',
    salary: '10000',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'christoffer',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${fanette}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'elderlycare',
    salary: '21000',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'Lucas',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${lucas}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'gardener',
    salary: '19000',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'Alexs',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${alexs}`,
  },
  {
    email: 'melissa.fleming@example.com',
    gender: 'female',
    work: 'childcare',
    salary: '10000',
    phone_number: '0740-304-475',
    birthdate: 469521368,
    location: {
      street: '3655 manchester road',
      city: 'winchester',
      state: 'berkshire',
      postcode: 'YB2 8EJ',
    },
    username: 'goldenkoala410',
    password: 'sick',
    first_name: 'melissa',
    last_name: 'fleming',
    title: 'miss',
    picture: `${pragati}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'childcare',
    salary: '12400',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'christoffer',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${fanette}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'elderlycare',
    salary: '17000',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'Lucas',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${lucas}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'elderlycare',
    salary: '13000',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'Alexs',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${alexs}`,
  },
  {
    email: 'melissa.fleming@example.com',
    gender: 'female',
    work: 'gardener',
    salary: '16000',
    phone_number: '0740-304-475',
    birthdate: 469521368,
    location: {
      street: '3655 manchester road',
      city: 'winchester',
      state: 'berkshire',
      postcode: 'YB2 8EJ',
    },
    username: 'goldenkoala410',
    password: 'sick',
    first_name: 'melissa',
    last_name: 'fleming',
    title: 'miss',
    picture: `${pragati}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'elderlycare',
    salary: '20000',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'christoffer',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${fanette}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'elderlycare',
    salary: '12000',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'Lucas',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${lucas}`,
  },
  {
    email: 'christoffer.christiansen@example.com',
    gender: 'male',
    work: 'elderlycare',
    salary: '10000',
    phone_number: '05761325',
    birthdate: 244475798,
    location: {
      street: '3391 pilevangen',
      city: 'overby lyng',
      state: 'danmark',
      postcode: 88520,
    },
    username: 'smallbird985',
    password: 'samuel',
    first_name: 'Alexs',
    last_name: 'christiansen',
    title: 'mr',
    picture: `${alexs}`,
  },
];

const Home = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(userDataa);
    setData(maidData);
  }, []);

  const renderHorizontalList = ({item}) => {
    return (
      <TouchableOpacity
        key={item.key}
        onPress={() => handleFilter(item.filterName)}>
        <View
          style={{
            padding: 16,
            height: 100,
            color: 'white',
          }}>
          <Image source={item.uri} style={styles.filterImage} />
          <Text style={{color: 'white', paddingTop: 10, textAlign: 'center'}}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderVerticalList = ({item, index}) => {
    return (
      <TouchableOpacity key={index} onPress={() => alert('Item pressed!')}>
        <View
          style={{
            flexDirection: 'row',
            padding: 16,
          }}>
          <Avatar size={64} rounded source={item.picture} />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
            }}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                {item.first_name}
              </Text>
              <Text style={{color: 'black'}}>City - {item.location.city}</Text>
            </View>
            <Text style={{color: 'black'}}>Rs. {item.salary}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleFilter = filterName => {
    let newUserData = userDataa.filter(element => {
      return element.work === filterName;
    });
    setUserData(newUserData);
  };

  const handleSearch = text => {
    const formattedText = text.toString().toLowerCase();
    const filteredData = userDataa.filter(element => {
      const pincode = element.location.postcode;
      const userCity = element.location.city;
      return (
        pincode.toString().indexOf(formattedText) > -1 ||
        userCity.indexOf(formattedText) > -1
      );
    });
    setUserData(filteredData);
    setText(text);
  };

  return (
    <Fragment>
      <View style={styles.header}>
        <View style={styles.headerBody}>
          <View style={styles.searchSection}>
            <Input
              placeholder="search by area code"
              value={text}
              style={{backgroundColor: 'white', paddingHorizontal: 10}}
              onChangeText={queryText => handleSearch(queryText)}
            />
          </View>
          <View style={styles.horizontalFlatlist}>
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 15,
                fontWeight: 'bold',
              }}>
              Top Filter
            </Text>
            <FlatList
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item, index) => index}
              renderItem={item => renderHorizontalList(item)}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerBody}>
          <View style={styles.vericalFlatlist}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                paddingBottom: 10,
              }}>
              Maid in your area
            </Text>
            <FlatList
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              data={userData}
              keyExtractor={(item, index) => index}
              renderItem={(item, index) => renderVerticalList(item, index)}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default Home;
