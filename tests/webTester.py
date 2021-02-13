import time
import datetime
import json
from selenium import webdriver

# TODO Place the id strings here
# TODO Replace ID TO BE ENTERED with actual strings used on the frontend
# TODO Finish forgot password and the fifth test

class Tester:
    def __init__(self):
        super().__init__()
        self.init_tester()
        self.url = "http://localhost:3000/signin"
 
    '''
    -- Initialize the selenium firefox driver
    '''
    def init_tester(self):
        try:
            self.driver = webdriver.Firefox(executable_path="geckodriver.exe")
        except:
            raise Exception('Could not connect to the browser.')
    
    
    '''
    -- Check if incorrect login details are handled correctly
    -- Check if empty login details are handled correctly
    -- Verify if correct login details redirect properly
    '''
    def field_validation_test(self, email_phone, password, test_name="Field Validation Test"):
        log_data = {'test_name':test_name, 'messages':[], 'error':''}

        try:
            # get a handle to the input fields, and login button
            select_email_phone = self.driver.find_element_by_id("signinInpEmailAddress")
            select_pwd = self.driver.find_element_by_id("signinInpPassword")
            login_button = self.driver.find_element_by_id("signinBtnSignin")

            # enter the email and password
            select_email_phone.clear()
            select_pwd.clear()
            select_email_phone.send_keys(email_phone)
            select_pwd.send_keys(password)
            time.sleep(1)

            # submit fields
            login_button.click()
            time.sleep(2)

            # successful login
            if (self.url != self.driver.current_url):
                log_data['messages'] = log_data['messages'].append("Successful Login")
                log_data['messages'] = log_data['messages'].append("Fields Verified Successfully")
                # log back out
                logout_button = self.driver.find_element_by_id("ID TO BE ENTERED")
                logout_button.click()
                time.sleep(2)
            # empty username and password
            elif self.driver.find_element_by_id("signinErrValidEmail").is_displayed() and self.driver.find_element_by_id("signinErrValidPassword").is_displayed():
                log_data['messages'].append("Email/Phone not entered")
                log_data['messages'].append("Password not entered")
            # empty password
            elif self.driver.find_element_by_id("signinErrValidPassword").is_displayed():
                log_data['messages'].append("Password not entered")
            # empty username
            elif self.driver.find_element_by_id("signinErrValidEmail").is_displayed():
                log_data['messages'].append("Email/Phone not entered")
            # wrong username and/or password
            elif self.driver.find_element_by_id("signinErrErr").is_displayed():
                log_data['messages'].append(self.driver.find_element_by_id("signinErrErr").text)
        except Exception as e:
            log_data['error'] = str(e)
        
        self.logger(log_data)

    '''
    -- Verify if the "remember me" checkbox works correctly
    '''
    def remember_me_test(self, email_phone, password, checked_flag, test_name="Remember Me Test"):
        log_data = {'test_name':test_name, 'messages':[], 'error':''}

        try:
            # get a handle to the input fields, and login button
            select_email_phone = self.driver.find_element_by_id("ID TO BE ENTERED")
            select_pwd = self.driver.find_element_by_id("ID TO BE ENTERED")
            login_button = self.driver.find_element_by_id("ID TO BE ENTERED")

            # enter the email and password
            select_email_phone.clear()
            select_pwd.clear()
            select_email_phone.send_keys(email_phone)
            select_pwd.send_keys(password)
            time.sleep(1)

            # check remember me as checked_flag warrants
            select_checkbox = self.driver.find_element_by_id("ID TO BE ENTERED")
            if ((select_checkbox.is_selected() and not checked_flag) or (not select_checkbox.is_selected() and checked_flag)):
                select_checkbox.click()
            
            time.sleep(0.3)

            # submit fields
            login_button.click()
            time.sleep(2)

            # log back out
            logout_button = self.driver.find_element_by_id("ID TO BE ENTERED")
            logout_button.click()
            time.sleep(2)

            # log back in to check if remember me works
            login_button.click()
            time.sleep(2)

            # successful login again
            if (self.url != self.driver.current_url):
                log_data['messages'] = log_data['messages'].append(f"Remember me {checked_flag} works")
                # log back out
                logout_button = self.driver.find_element_by_id("ID TO BE ENTERED")
                logout_button.click()
                time.sleep(2)
        except Exception as e:
            log_data['error'] = str(e)
        
        self.logger(log_data)


    '''
    -- Verify if forgot password changed password properly
    '''
    def forgot_password_test(self):
        pass

    '''
    -- Enables the logging of test results to a file
    '''
    def logger(self, log_data):
        try:
            with open("login_test_logs.txt", "a") as file:
                file.write("--------------------------------------\nTest Name:\n- ")
                file.write(log_data['test_name'])
                file.write(f"\nMessages:")
                for msg in log_data['messages']:
                    file.write(f"\n- {msg}")
                if log_data['error'] == "":
                    file.write(f"\nError:\n- None")
                else:
                    file.write(f"\nError:\n- {log_data['error']}")
                file.write('\n')
            file.close
        except:
            print("Couldn't write to file")

    '''
    -- Run all defined tests and log the results
    '''
    def test_runner(self):
        self.driver.get(self.url)

        '''
        -- TEST 01 - Empty fields test and incorrect fields test
        '''
        self.field_validation_test("","", "All empty fields test")
        self.driver.refresh()
        self.field_validation_test("hanzallah@gmail.com","", "Correct email with empty password test")
        self.driver.refresh()
        self.field_validation_test("","1234", "Empty email with password test")
        self.driver.refresh()
        self.field_validation_test("bot@outlook.com","$vduew2191BA", "Incorrect email and password test")
        self.driver.refresh()
        self.field_validation_test("hanzallah@gmail.com","$vduew2191BA", "Correct email and incorrect password test")
        

        '''
        -- TEST 02 - successful login and correct field verification test
        '''
        # self.field_validation_test("CORRECT_EMAIL","CORRECT_PWD")

        '''
        -- TEST 03 - Remember Me test
        '''
        # self.remember_me_test("","", True)
        # self.remember_me_test("","", False)

        '''
        -- TEST 04 - Forgot Password test
        '''

        '''
        -- TEST 05 - TBD
        '''

        self.dispose()
    
    '''
    -- Dispose the driver once all tests are completed
    '''
    def dispose(self):
        self.driver.close()
'''
-- Script runner section
'''
def main():
    tester = Tester()
    tester.test_runner()

if __name__ == '__main__':
    main()