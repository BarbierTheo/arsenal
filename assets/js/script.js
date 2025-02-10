document.getElementById('effectif').addEventListener('click', function () {
    document.getElementById('effectif').classList.add('tab-active')
    document.getElementById('classement').classList.remove('tab-active')
    document.getElementById('stats').classList.remove('tab-active')
    document.getElementById('days').classList.remove('tab-active')
    showEffectif()
})

document.getElementById('classement').addEventListener('click', function () {
    document.getElementById('classement').classList.add('tab-active')
    document.getElementById('effectif').classList.remove('tab-active')
    document.getElementById('stats').classList.remove('tab-active')
    document.getElementById('days').classList.remove('tab-active')
    showClassement()
})

document.getElementById('stats').addEventListener('click', function () {
    document.getElementById('stats').classList.add('tab-active')
    document.getElementById('classement').classList.remove('tab-active')
    document.getElementById('effectif').classList.remove('tab-active')
    document.getElementById('days').classList.remove('tab-active')
})

document.getElementById('days').addEventListener('click', function () {
    document.getElementById('days').classList.add('tab-active')
    document.getElementById('classement').classList.remove('tab-active')
    document.getElementById('stats').classList.remove('tab-active')
    document.getElementById('effectif').classList.remove('tab-active')
})


function showClassement() {
    document.getElementById('interface').innerHTML = `<div class="overflow-s text-xs container lg:max-w-[50rem]">
                <table class="table table-sm">
                    <!-- head -->
                    <thead>
                        <tr class="text-xs">
                            <th></th>
                            <th></th>
                            <th>MJ</th>
                            <th>G</th>
                            <th>N</th>
                            <th>P</th>
                            <th>DB</th>
                            <th>PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr class="hover:bg-gray-600 hover:text-gray-50 ease-in-out duration-300">
                            <th>1</th>
                            <td><a href="#" class="font-bold">Liverpool FC</a></td>
                            <td>24</td>
                            <td>21</td>
                            <td>1</td>
                            <td>2</td>
                            <td>+16</td>
                            <td>42</td>
                        </tr>
                        <!-- row 2 -->
                        <tr class="hover:bg-gray-600 hover:text-gray-50 ease-in-out duration-300">
                            <th>2</th>
                            <td><a href="#" class="font-bold">Arsenal</a></td>
                            <td>24</td>
                            <td>21</td>
                            <td>1</td>
                            <td>2</td>
                            <td>+16</td>
                            <td>42</td>
                        </tr>
                    </tbody>
                </table>
            </div>`
}

function showEffectif() {
    document.getElementById('interface').innerHTML = `
            <div class="text-xs container lg:max-w-[50rem] overflow-x-auto mb-8">
                <table class="table table-sm">
                    <!-- head -->
                    <thead>
                        <tr class="text-xs">
                            <th>N°</th>
                            <th></th>
                            <th></th>
                            <th>Nationalité</th>
                            <th>Estimation</th>
                            <th>Contrat</th>
                            <th>B</th>
                            <th>PD</th>
                            <th>MJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr class="hover:bg-gray-600 hover:text-gray-50 ease-in-out duration-300">
                            <td>7</td>
                            <td class="font-bold">Bukayo Saka</td>
                            <td>24 ans</td>
                            <td>Angleterre</td>
                            <td>140 Mio. €</td>
                            <td>Attaquant</td>
                            <td>11</td>
                            <td>9</td>
                            <td>27</td>
                        </tr>
                        <!-- row 2 -->
                        <tr class="hover:bg-gray-600 hover:text-gray-50 ease-in-out duration-300">
                            <td>11</td>
                            <td class="font-bold">Martinelli</td>
                            <td>23 ans</td>
                            <td>Brésil</td>
                            <td>60 Mio. €</td>
                            <td>Attaquant</td>
                            <td>8</td>
                            <td>4</td>
                            <td>29</td>
                        </tr>
                    </tbody>
                </table>
            </div>
`
}









showClassement()
