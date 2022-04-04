# Start
1. open Putty
in Session tab, Host name: 195.148.22.38, Port: 22, Connection type: SSH. You may save it for further reference under any name (for example, VM)
2. login:
juuuser1; use the corresponding password from the Teams Secret spreadsheet (column E)
3. to open and check database:
$ mysql -h localhost -u <username> -p ENTER then enter corresponding password from Teams spreadsheet
(possible users: admin or backend)
4. choose the DB: db22k
5. to quit the db: 
quit;

# to deploy the backend code to the VM 
  (now it's installed there, no need to do it now, just for future reference):
1. login again as juuuser1 or continue from previous step
2. git clone <git repo link> 
3. cd <project folder>
4. to install packages:
$npm install
5. to move the .env file to the VM (for PC):
WinSCP program
during the installation, it asks to import saved profiles from Putty -> yes
use the saved profile from block 1 of this instruction (VM)
use juuuser1 login from block 1
on the right side of the window, open the remote project folder
on the left side of the window, open the local project folder; find .env there; drag it to the remote folder root (check that it's copied, not moved)
open the .env file from the remote folder and correct and save the data:
BE_SERVER_PORT="8777"
DB_USER="backend"
DB_PASSWORD=<password from the excel>
DB_DATABASE="db22k"

# to access and run the backend code:
1. login again as juuuser1 or continue from previous step
2. to list the contents of the root directory:
$ls -Falls 
3. cd <project folder>
4. npm run dev

# to update the backend code:
1. git pull



