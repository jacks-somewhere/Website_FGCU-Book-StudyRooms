from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
chrome_options = Options()
chrome_options.add_argument("--disable-extensions")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--headless=new")

import time

def BookRoom(firstn, lastn, email, day, starthour, startmin, startap, endhour, endmin, endap):
    
    noBookRoomList = [113,116] #list of all rooms that should not be booked
    room = 110 #lowest room number
    
    driver = webdriver.Chrome(options=chrome_options)
    driver.get('https://fgcu.libcal.com/r/new/availability?lid=1191&zone=0&gid=0&capacity=1')
    print(driver.title)

    time.sleep(2)

    for i in range(day): #number of days clicked though
        next_element = driver.find_element(By.CSS_SELECTOR, '[class*="chevron-right"]')
        next_element.click()

        time.sleep(1)
                
    while True:

        try:
            print(f'Trying room {room} now')
            #selects time and location
            div_element = driver.find_element(By.CSS_SELECTOR, f'[title*="{starthour}:{startmin}{startap}"][title*="{room}"]')
 
            div_element.click()
            
            print('Start Time Button clicked')

            #selects end time
            drop_element = driver.find_element(By.CSS_SELECTOR, f'[title*="{endhour}:{endmin}{endap}"]')
            drop_element.click()
            print('Drop Down Button clicked')

            #goes to next page
            submit_element = driver.find_element(By.ID, 'submit_times')
            submit_element.click()
            print('Next Page')

            time.sleep(1)
            
            #enters information
            firstname_input = driver.find_element(By.ID, 'fname')
            firstname_input.send_keys(f'{firstn}')
            print('First name entered')

            lastname_input = driver.find_element(By.ID, 'lname')
            lastname_input.send_keys(f'{lastn}')
            print('Last name entered')

            email_input = driver.find_element(By.ID, 'email')
            email_input.send_keys(f'{email}@eagle.fgcu.edu')
            print('Email entered')

            time.sleep(2)
            
            finalsubmit_element = driver.find_element(By.ID, 'btn-form-submit')
            #finalsubmit_element.click()

            print('Submited')
            
            return 'sucess'
            
            driver.close()

        except:
            room += 1 #addes one to the room number intel room is booked

            if room >= 337: #stops program when last room is reached
                return 'fail'
                driver.close()
    