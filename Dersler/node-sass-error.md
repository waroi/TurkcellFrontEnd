npm ERR! code 1
npm ERR! path C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-sass
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node scripts/build.js
npm ERR! Building: C:\Program Files\nodejs\node.exe C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-gyp\bin\node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags=
--libsass_ldflags= --libsass_library=
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp verb cli [
npm ERR! gyp verb cli 'C:\\Program Files\\nodejs\\node.exe',
npm ERR! gyp verb cli 'C:\\turkcell\\TurkcellFrontEnd\\Ogrenciler\\batuhansevinc\\ders08\\sass\\node_modules\\node-gyp\\bin\\node-gyp.js',
npm ERR! gyp verb cli 'rebuild',
npm ERR! gyp verb cli '--verbose',
npm ERR! gyp verb cli '--libsass_ext=',
npm ERR! gyp verb cli '--libsass_cflags=',
npm ERR! gyp verb cli '--libsass_ldflags=',
npm ERR! gyp verb cli '--libsass_library='
npm ERR! gyp verb cli ]
npm ERR! gyp info using node-gyp@8.4.1
npm ERR! gyp info using node@18.10.0 | win32 | x64
npm ERR! gyp verb command rebuild []
npm ERR! gyp verb command clean []
npm ERR! gyp verb clean removing "build" directory
npm ERR! gyp verb command configure []
npm ERR! gyp verb find Python Python is not set from command line or npm configuration
npm ERR! gyp verb find Python Python is not set from environment variable PYTHON
npm ERR! gyp verb find Python checking if "python3" can be used
npm ERR! gyp verb find Python - executing "python3" to get executable path
npm ERR! gyp verb find Python - "python3" is not in PATH or produced an error
npm ERR! gyp verb find Python checking if "python" can be used
npm ERR! gyp verb find Python - executing "python" to get executable path
npm ERR! gyp verb find Python - executable path is "C:\Users\Gbc\AppData\Local\Programs\Python\Python310\python.exe"
npm ERR! gyp verb find Python - executing "C:\Users\Gbc\AppData\Local\Programs\Python\Python310\python.exe" to get version
npm ERR! gyp verb find Python - version is "3.10.8"
npm ERR! gyp info find Python using Python version 3.10.8 found at "C:\Users\Gbc\AppData\Local\Programs\Python\Python310\python.exe"
npm ERR! gyp verb get node dir no --target version specified, falling back to host node version: 18.10.0
npm ERR! gyp verb command install [ '18.10.0' ]
npm ERR! gyp verb install input version string "18.10.0"
npm ERR! gyp verb install installing version: 18.10.0
npm ERR! gyp verb install --ensure was passed, so won't reinstall if already installed
npm ERR! gyp verb install version is already installed, need to check "installVersion"
npm ERR! gyp verb got "installVersion" 9
npm ERR! gyp verb needs "installVersion" 9
npm ERR! gyp verb install version is good
npm ERR! gyp verb get node dir target node version installed: 18.10.0
npm ERR! gyp verb build dir attempting to create "build" dir: C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-sass\build
npm ERR! gyp verb build dir "build" dir needed to be created? Yes
npm ERR! gyp verb find VS msvs_version not set from command line or npm config
npm ERR! gyp verb find VS VCINSTALLDIR not set, not running in VS Command Prompt
npm ERR! gyp verb find VS could not use PowerShell to find Visual Studio 2017 or newer, try re-running with '--loglevel silly' for more details
npm ERR! gyp verb find VS looking for Visual Studio 2015
npm ERR! gyp verb find VS - not found
npm ERR! gyp verb find VS not looking for VS2013 as it is only supported up to Node.js 8
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! find VS msvs_version not set from command line or npm config
npm ERR! gyp ERR! find VS VCINSTALLDIR not set, not running in VS Command Prompt
npm ERR! gyp ERR! find VS could not use PowerShell to find Visual Studio 2017 or newer, try re-running with '--loglevel silly' for more details
npm ERR! gyp ERR! find VS looking for Visual Studio 2015
npm ERR! gyp ERR! find VS - not found
npm ERR! gyp ERR! find VS not looking for VS2013 as it is only supported up to Node.js 8
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! find VS ******************************\*\*******************************
npm ERR! gyp ERR! find VS You need to install the latest version of Visual Studio
npm ERR! gyp ERR! find VS including the "Desktop development with C++" workload.
npm ERR! gyp ERR! find VS For more information consult the documentation at:
npm ERR! gyp ERR! find VS https://github.com/nodejs/node-gyp#on-windows
npm ERR! gyp ERR! find VS ******************************\*\*******************************
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! configure error
npm ERR! gyp ERR! stack Error: Could not find any Visual Studio installation to use
npm ERR! gyp ERR! stack at VisualStudioFinder.fail (C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-gyp\lib\find-visualstudio.js:122:47)
npm ERR! gyp ERR! stack at C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-gyp\lib\find-visualstudio.js:75:16
npm ERR! gyp ERR! stack at VisualStudioFinder.findVisualStudio2013 (C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-gyp\lib\find-visualstudio.js:363:14)
npm ERR! gyp ERR! stack at C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-gyp\lib\find-visualstudio.js:71:14
npm ERR! gyp ERR! stack at C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-gyp\lib\find-visualstudio.js:384:16
npm ERR! gyp ERR! stack at C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-gyp\lib\util.js:54:7
npm ERR! gyp ERR! stack at C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-gyp\lib\util.js:33:16
npm ERR! gyp ERR! stack at ChildProcess.exithandler (node:child_process:420:5)
npm ERR! gyp ERR! stack at ChildProcess.emit (node:events:513:28)
npm ERR! gyp ERR! stack at maybeClose (node:internal/child_process:1091:16)
npm ERR! gyp ERR! System Windows_NT 10.0.19044
npm ERR! gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\turkcell\\TurkcellFrontEnd\\Ogrenciler\\batuhansevinc\\ders08\\sass\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
npm ERR! gyp ERR! cwd C:\turkcell\TurkcellFrontEnd\Ogrenciler\batuhansevinc\ders08\sass\node_modules\node-sass
npm ERR! gyp ERR! node -v v18.10.0
npm ERR! gyp ERR! node-gyp -v v8.4.1
npm ERR! gyp ERR! not ok
npm ERR! Build failed with error code: 1

npm ERR! A complete log of this run can be found in:
npm ERR! C:\Users\Gbc\AppData\Local\npm-cache_logs\2022-10-21T15_59_08_928Z-debug-0.log
