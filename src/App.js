import React, { Component, Fragment }  from 'react';
import './App.css';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Text from './components/text'
import Com from './components/com';
import Message from './components/Message';
import Counter1 from './components/Counter1';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';
import Hello2 from './components/hello2'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './FragmentDemo';
import Table from './Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './Counter'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
class App extends Component {
  render() { 
    return (
      <div className="App">
        <PostForm/>
        {/* <PostList/> */}

        {/* <UserProvider value="sadik">
          <ComponentC />
        </UserProvider> */}

        {/* <Counter 
          render={(count, incrementCount) =>(
            <ClickCounterTwo count ={count} incrementCount={incrementCount} />
          )}
        />

        <Counter 
          render={(count, incrementCount) =>(
            <HoverCounterTwo count ={count} incrementCount={incrementCount} />
          )}
        /> */}

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'Sadik' : 'Guest'} /> */}
      {/* <User name={ (isLoggedIn) => isLoggedIn ? 'Sadik' : 'Guest'}  /> */}
        {/* <ErrorBoundary >
          <Hero heroName="Batman"/>
          <Hero heroName="Joker"/>
        </ErrorBoundary>*/}
        {/* <PortalDemo/> */}
        {/* <FRParentInput /> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo /> */}
        {/* <ParentComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <LifecycleA/> */}
        {/* <Form/> */} 
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <Inline/> */}

        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
      {/* <UserGreeting /> */}
        {/* <ParentComponents/> */}
        {/* <Hello2 /> */}
        
        {/* <ParentComponents/> */}
        {/* <EventBind/>
        <FunctionClick/>
        <ClassClick/>
        <Counter />
        <Message />
        <Text />  */}
        {/* <Welcome/> */}
        {/* <Greet name="Sadik" title="Son">
          <p>This is Props Children;
          </p>
        </Greet> */}
        {/* {/* <Greet name="Kabir" title="Father"/> */}
        {/* <Greet name="Ahmad" title="GrandFather"/>
        <Text name="Sadik" title="Son"/> */}
        {/* <Text name="Kabir" title="Father"/>
        <Greet name="Ahmad" title="GrandFather"/> */}

        {/* <Com name="Khadija" title="Malama"/>  */}
        
        {/* <Int/>*/}
        {/* <Sus/>  */}

      </div>
    );
  }
}

export default App;
