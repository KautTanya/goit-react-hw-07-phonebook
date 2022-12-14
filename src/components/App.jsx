// import { useState, useEffect } from 'react';
import { MainTitle } from './MainTitle/MainTitle';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Filter} from './Filter/Filter';


export default function App(){
  return(
  <div
            style={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#E4E5EA',
                }}>
          <MainTitle title = 'Phonebook'/>
          <ContactForm/>
          <SectionTitle title = 'Contacts'/>
             <Filter/>
              
            <ContactList/>
                      
      </div>
);
}

 

  




