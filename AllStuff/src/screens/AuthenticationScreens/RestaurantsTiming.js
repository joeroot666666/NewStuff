import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
  Platform,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Gcolor, hp, wp, commonFont, icons, images} from '../../common';
import {GTextInput, GButton} from '../../common/GComponents';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

const RestaurantsTiming = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [monOpenHours, setMonOpenHours] = useState('');
  const [monCloseHours, setMonCloseHours] = useState('');
  const [wedOpenHours, setWedOpenHours] = useState('12:30 PM');
  const [wedCloseHours, setWedCloseHours] = useState('12:30 PM');
  const [isSelected, setSelection] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fTime =
      tempDate.getHours() + ' Hours ' + tempDate.getMinutes() + ' Minutes';
    setText(fTime);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <ScrollView style={{backgroundColor: Gcolor.placeholdertext}}>
      <View style={styles.body}>
        <View style={styles.moncon}>
          <Text style={styles.mon}>Monday</Text>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.add1}>Opening Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.add1}>Closing Hours</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.timeslot}>+ Add time slot</Text>
        <View style={styles.row}>
          <CheckBox
            value={isSelected}
            onValueChange={newValue => setSelection(newValue)}
          />
          <Text style={[styles.add1, {marginTop: hp(0.5)}]}>
            Assign Monday Timings for all days
          </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.moncon}>
          <Text style={styles.mon}>Tuesday</Text>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled1 ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled1}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.moncon}>
          <Text style={styles.mon}>Wednesday</Text>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.add1}>Opening Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.add1}>Closing Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.timeslot}>+ Add time slot</Text>
        <View style={styles.line} />
        <View style={styles.moncon}>
          <Text style={styles.mon}>Thursday</Text>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.add1}>Opening Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.add1}>Closing Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.timeslot}>+ Add time slot</Text>
        <View style={styles.line} />
        <View style={styles.moncon}>
          <Text style={styles.mon}>Friday</Text>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.add1}>Opening Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.add1}>Closing Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.timeslot}>+ Add time slot</Text>
        <View style={styles.line} />
        <View style={styles.moncon}>
          <Text style={styles.mon}>Saturday</Text>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.add1}>Opening Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.add1}>Closing Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.timeslot}>+ Add time slot</Text>
        <View style={styles.line} />
        <View style={styles.moncon}>
          <Text style={styles.mon}>Sunday</Text>
          <Switch
            trackColor={{false: '#767577', true: Gcolor.btncolor}}
            thumbColor={isEnabled ? Gcolor.white : '#f4f3f4'}
            ios_backgroundColor={Gcolor.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.add1}>Opening Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.add1}>Closing Hours</Text>
        <TouchableOpacity onPress={() => showMode('time')}>
          <View style={styles.settime}>
            <Text style={styles.timetext}>{text}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.timeslot}>+ Add time slot</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.btnview}>
        <GButton
          btnStyle={styles.btn}
          textStyle={{color: Gcolor.btncolor}}
          text={'Cancel'}
          onPress={() => alert('Button Click')}
        />
        <GButton
          btnStyle={styles.btn1}
          textStyle={{color: Gcolor.white}}
          text={'Save Changes'}
          onPress={() => alert('Button Click')}
        />
      </View>
    </ScrollView>
  );
};

export default RestaurantsTiming;

const styles = StyleSheet.create({
  body: {
    backgroundColor: Gcolor.white,
    width: wp(87),
    alignSelf: 'center',
    marginTop: hp(2),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  settime: {
    marginTop: hp(1.5),
    backgroundColor: Gcolor.white,
    borderRadius: 8,
    width: wp(78),
    justifyContent: 'center',
    alignSelf: 'center',
    height: hp(6.4),
    borderColor: Gcolor.borderColors,
    borderWidth: 1,
  },
  timetext: {
    color: Gcolor.headerTextColor,
    fontSize: commonFont.fs14,
    fontWeight: 'bold',
    fontFamily: commonFont.LRegular,
    marginLeft: wp(4),
  },
  btn: {
    backgroundColor: Gcolor.white,
    width: wp(41),
    height: hp(7),
    borderColor: Gcolor.btncolor,
    borderWidth: 1,
    marginBottom: hp(1.5),
    marginLeft: wp(4),
  },
  btn1: {
    backgroundColor: Gcolor.btncolor,
    width: wp(41),
    height: hp(7),
    borderColor: Gcolor.btncolor,
    marginBottom: hp(1.5),
    marginRight: wp(4),
  },
  btnview: {
    flexDirection: 'row',
    marginTop: hp(3),
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: Gcolor.white,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginLeft: wp(4),
  },
  line: {
    borderBottomColor: Gcolor.borderColors,
    borderBottomWidth: 1,
    marginTop: hp(2.2),
    width: wp(78),
    alignSelf: 'center',
  },
  timeslot: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs12,
    color: Gcolor.btncolor,
    fontWeight: 'bold',
  },
  mon: {
    fontFamily: commonFont.LRegular,
    fontSize: commonFont.fs16,
    color: Gcolor.addressTxt,
    fontWeight: 'bold',
  },
  add1: {
    fontSize: commonFont.fs14,
    fontWeight: '400',
    fontFamily: commonFont.LRegular,
    color: Gcolor.inputTitle,
    marginTop: hp(2),
    marginLeft: wp(4),
  },
  moncon: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginLeft: wp(4),
    justifyContent: 'space-between',
  },
});
