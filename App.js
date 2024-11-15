
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home';
import SignUpScreen from './components/signup';
import SignIn from './components/SignIn';
import details from './components/data';
import employeeData from './components/Employee Data';
import markAttendence from './components/Mark Attendance';
import attendanceReport from './components/Attendance Report';
import summaryReport from './components/Summary Report';
import reportGenerate from './components/All Generate Report';
import overtimeEmployee from './components/Overtime Employee';
import attendenceCriteria from './components/Attendance Criteria';
import increaseWorkflow from './components/Increase Workflow';
import costSaving from './components/Cost Savings';
import employeePerformance from './components/Employee Performance';
import addDetails from './components/Add Details';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="data" component={details}/>
        <Stack.Screen name="Employee Data" component={employeeData}/>
        <Stack.Screen name="Mark Attendance" component={markAttendence}/>
        <Stack.Screen name="Attendance Report" component={attendanceReport}/>
        <Stack.Screen name="Summary Report" component={summaryReport}/>
        <Stack.Screen name="All Generate Report" component={reportGenerate}/>
        <Stack.Screen name=" Overtime Employee" component={overtimeEmployee}/>
        <Stack.Screen name="Attendance Criteria" component={attendenceCriteria}/>
        <Stack.Screen name="Increase Workflow" component={increaseWorkflow}/>
        <Stack.Screen name="Cost Savings" component={costSaving}/>
        <Stack.Screen name="Employee Performance" component={employeePerformance}/>
        <Stack.Screen name="Add Details" component={addDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;



