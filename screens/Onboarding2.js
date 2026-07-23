import theme1 from "../styles/theme1";

import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, ScrollView, Dimensions, Platform } from 'react-native';
import { userFinishedOnboarding2 } from "../state/onboarding";

const Onboarding2 = ({ navigation }) => {
  const styles = theme1;

  const [birthday, setBirthday] = useState("June 12, 2026");
  const [sex, setSex] = useState("Male");
  const [weight, setWeight] = useState("80 kg");
  const [yearsSwimming, setYearsSwimming] = useState("1 year");
  const [frequency, setFrequency] = useState("2 times a week");

  // currently active field for picker
  const [activeField, setActiveField] = useState(null); // 'birthday' | 'sex' | 'weight' | 'yearsSwimming' | 'frequency'

  // Temporary selected values in picker modal before clicking "Done"
  const [tempDate, setTempDate] = useState({ month: "June", day: "12", year: "2026" });
  const [tempValue, setTempValue] = useState("");

  // Option lists
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const years = Array.from({ length: 80 }, (_, i) => String(2026 - i));

  const sexOptions = ["Male", "Female", "Other"];
  const weightOptions = Array.from({ length: 200 }, (_, i) => `${i + 40} kg`);
  const swimmingOptions = ["< 1 year", "1 year", "2 years", "3 years", "4 years", "5+ years"];
  const frequencyOptions = ["Less than monthly", "A few times a Month", "1 time a week", "2 times a week", "3 times a week", "4+ times a week"];

  // Open specific picker with current field value pre-selected
  const openPicker = (field) => {
    setActiveField(field);
    if (field === 'birthday') {
      const parts = birthday.split(" ");
      if (parts.length === 3) {
        setTempDate({
          month: parts[0],
          day: parts[1].replace(",", ""),
          year: parts[2]
        });
      }
    } else {
      const val = field === 'sex' ? sex :
                  field === 'weight' ? weight :
                  field === 'yearsSwimming' ? yearsSwimming : frequency;
      setTempValue(val);
    }
  };

  const savePickerValue = () => {
    if (activeField === 'birthday') {
      setBirthday(`${tempDate.month} ${tempDate.day}, ${tempDate.year}`);
    } else if (activeField === 'sex') {
      setSex(tempValue);
    } else if (activeField === 'weight') {
      setWeight(tempValue);
    } else if (activeField === 'yearsSwimming') {
      setYearsSwimming(tempValue);
    } else if (activeField === 'frequency') {
      setFrequency(tempValue);
    }
    setActiveField(null);
  };

  // Wheel Column Component that works perfectly in iOS, Android and Web
  const WheelColumn = ({ items, selectedValue, onValueChange }) => {
    const scrollViewRef = useRef(null);

    // Initial scroll position
    useEffect(() => {
      const index = items.indexOf(selectedValue);
      if (index !== -1 && scrollViewRef.current) {
        // Wait a tiny frame for layout
        setTimeout(() => {
          scrollViewRef.current?.scrollTo({ y: index * 44, animated: false });
        }, 50);
      }
    }, [selectedValue, items]);

    const handleScroll = (event) => {
      const y = event.nativeEvent.contentOffset.y;
      const index = Math.round(y / 44);
      if (index >= 0 && index < items.length) {
        onValueChange(items[index]);
      }
    };

    return (
      <View style={styles.pickerColumn}>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={44}
          decelerationRate="fast"
          onMomentumScrollEnd={handleScroll}
          // Pad top and bottom so first and last elements can align perfectly in center (height 200, item height 44, top padding ~78)
          contentContainerStyle={{ paddingVertical: 78 }}
        >
          {items.map((item, idx) => {
            const isSelected = item === selectedValue;
            return (
              <Pressable
                key={idx}
                style={styles.pickerItem}
                onPress={() => {
                  scrollViewRef.current?.scrollTo({ y: idx * 44, animated: true });
                  onValueChange(item);
                }}
              >
                <Text style={isSelected ? styles.pickerItemTextSelected : styles.pickerItemText}>
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>

        {/* Top Header / Navigation Bar */}
        {activeField !== null ? (
        <View style={[styles.pickerHeader, { marginHorizontal: -20, marginTop: -5, paddingHorizontal: 20, zIndex: 100}]}>
            <Pressable
                onPress={() => setActiveField(null)}
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                style={{ zIndex: 101, position: 'relative', cursor: 'pointer' }}
                >
                
                <Text style={styles.pickerHeaderButtonText}>Cancel</Text>
            </Pressable>
                <Text style={styles.pickerHeaderTitle}>
                    {activeField === 'birthday' ? 'Select Date' : 'Select Option'}
                </Text>
            <Pressable
                onPress={savePickerValue}
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                style={{ zIndex: 101, position: 'relative', cursor: 'pointer' }}
                >
                
                <Text style={styles.pickerHeaderButtonText}>Done</Text>
            </Pressable>
        </View>
        ) : (
        <Pressable
          style={styles.backButton}
          onPress={() => {
            navigation.navigate("/onboarding/page1", {
              animation: "slide_from_left"
            });
          }}
        >    
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
        )}

        <View style={styles.headerContainer, { marginTop: -93 }}>
          <Text style={styles.title}>Personalize your{"\n"}training</Text>
          <Text style={styles.subtitle}>
            This Information helps us create personalized exercises to your level and goals. Your details are not shared with us.
          </Text>
        </View>
      
        {/* Section Table */}
        <View style={{ width: '100%'}}>

            <View style={styles.tableContainer}>
            {/* Row 1 */}
            <Pressable style={styles.questionField} onPress={() => openPicker('birthday')}>
                <Text style={styles.questionLabel}>Date of Birth</Text>
                <View style={styles.questionRight}>
                    <Text style={activeField === 'birthday' ? styles.questionValueSelected : styles.questionValue}>
                        {birthday}
                    </Text>
                </View>
            </Pressable>

            {/* Row 2 */}
            <Pressable style={styles.questionField} onPress={() => openPicker('sex')}>
                <Text style={styles.questionLabel}>Sex</Text>
                <View style={styles.questionRight}>
                    <Text style={activeField === 'sex' ? styles.questionValueSelected : styles.questionValue}>
                        {sex}
                    </Text>
                </View>
            </Pressable>

            {/* Row 3 */}
            <Pressable style={styles.questionField} onPress={() => openPicker('weight')}>
                <Text style={styles.questionLabel}>Weight</Text>
                <View style={styles.questionRight}>
                    <Text style={activeField === 'weight' ? styles.questionValueSelected : styles.questionValue}>
                        {weight}
                    </Text>
                </View>
            </Pressable>

            {/* Row 4 */}
            <Pressable style={styles.questionField} onPress={() => openPicker('yearsSwimming')}>
                <Text style={styles.questionLabel}>How long swimming?</Text>
                <View style={styles.questionRight}>
                    <Text style={activeField === 'yearsSwimming' ? styles.questionValueSelected : styles.questionValue}>
                        {yearsSwimming}
                    </Text>
                </View>
            </Pressable>

            {/* Row 5 */}
            <Pressable style={styles.questionFieldLast} onPress={() => openPicker('frequency')}>
                <Text style={styles.questionLabel}>Swim frequency</Text>
                <View style={styles.questionRight}>
                    <Text style={activeField === 'frequency' ? styles.questionValueSelected : styles.questionValue}>
                        {frequency}
                    </Text>
                </View>
            </Pressable>
            </View>
        </View>


        {/* Bottom Area containing Dots, Button and Skip Link */}
        <View style={[{ width: '100%', alignItems: 'center' }, activeField !== null && { marginBottom: 200 }]}>
            {activeField === null && (
                <View style={styles.dots}>
                    <View style={styles.dot} />
                    <View style={styles.whiteDot} />
                    <View style={styles.dot} />
                </View>
            )}

            <Pressable
                style={[styles.button, activeField !== null && { marginBottom: -7, paddingVertical: 18 }]}
                onPress={() => {
                  userFinishedOnboarding2.set(true);
                  navigation.navigate("/onboarding/page3", {
                    animation: "slide_from_right"
                  });
                }}
            >
                <Text style={styles.buttonText}>{"Continue"}</Text>
            </Pressable>

            {activeField === null && (
              
                <Pressable
                    style={{
                        position: "absolute",
                        bottom: 0,
                        alignSelf: "center",
                    }}
                    onPress={() => {
                        navigation.navigate("/home", {
                        animation: "slide_from_right"
                        });
                    }}
                >
                    <Text style={styles.skipText}>
                        Skip onboarding and continue{"\n"}with default values
                    </Text>
                </Pressable>
            )}
        </View>

        {/* Scroll Wheel Picker */}
        {activeField !== null && (
            <View style={styles.pickerModalOverlay}>

                {/* Wheel Picker body */}
                <View style={styles.pickerWheelRow}>
                    {/* The active selection overlay line */}
                    <View style={styles.pickerHighlight} />

                    {activeField === 'birthday' ? (
                    <>
                        <WheelColumn 
                        items={months} 
                        selectedValue={tempDate.month} 
                        onValueChange={(month) => setTempDate(prev => ({ ...prev, month }))} 
                        />
                        <WheelColumn 
                        items={days} 
                        selectedValue={tempDate.day} 
                        onValueChange={(day) => setTempDate(prev => ({ ...prev, day }))} 
                        />
                        <WheelColumn 
                        items={years} 
                        selectedValue={tempDate.year} 
                        onValueChange={(year) => setTempDate(prev => ({ ...prev, year }))} 
                        />
                    </>
                    ) : (
                        <WheelColumn 
                            items={
                            activeField === 'sex' ? sexOptions :
                            activeField === 'weight' ? weightOptions :
                            activeField === 'yearsSwimming' ? swimmingOptions : frequencyOptions
                            } 
                            selectedValue={tempValue} 
                            onValueChange={(val) => setTempValue(val)} 
                        />
                    )}
                </View>
            </View>
        )}

      <StatusBar style="light" />
    </View>
  );
};

export default Onboarding2;