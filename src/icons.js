(function(window) {

	const success = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABc9JREFUWAnNWWtPHFUYfs/s7AzXUhC5FUs1IJYqpTdDvESqGButmqbGRP+B30z84G/wg4nf9LsxJpoYY6xWrbamtdaSttJSIoWWIkK5BeS+s7M743lmPcM7swssy6K8JJ1zfZ9nz+W9nArKUS7YA0fnnaW3F914a4ziZTE3UbzsxqNQVygMu0DoiwVkzBYL43qpVvTBU9HGs7lAiY1MuuT2t0xYCx9OuQuPzzgSfwNSrhXHKkXJ5Sqz5K120dSb7dSsCF5y71RP2XOfDiamOuJuIqs5qxEwhO4+qFeeq4zueKNdPDS+2jjVvi7YGav3vf7k2DtLbjyiJvFviVZA5aKIioVJJSK1qAtujBZdi2bcJVpwYny4Xy4SRrIpUvN+p9nyrt+YobAqQdd1xSm7+8dbifEOlPlcuV3UHKmhxkgVVWk7eFdaecKZo4HkBPUlx0gei0C/EMJ9WK8+91J0/3MoBzr/rQSA1YDz7lD5qDXe/Vdy+gHVhm+pXK0noo20L7KLN2ddvpkcoYv2AM2HVrU+UjFcZ1bvf1o0zISVpRHEan1udf05nJyu54MPRffQk9Em0knjzRsuJ8ihX+x+umLfDcwFydfNIw3hlUxDw7ZycrrQ6Jj5GD0Tbd40OTDCD4Qu6IRuJdgtYKu6+q6MkC24EDhzqhMKTpqHqSVSp5ry9oVO6OYkgQ0OHMTfYpiSa8t3R/htxa/cCnKcQG9ylE5bN/wm3O4DhXt2KRPkryDsHCeHM7fV5MAKGMBSAg7gouoeQXgIGGHViNuKC7EVMidtJC7JoDPlqwcWMJWACzih7hGctBY/4h4CpmSzt1WB8e+wM02fxH6l3+w79KV1laTL9LqBBUwl4AKXinqKoDt/RHXCCOdq55SOTN8eaQO/sK6QDCi8bmnOaDS5YvaACWwl8Pcoa4hKuOOHh8i3/Gz30fdWDyVdx1etSQtRG9np11Hg2OAEbhpCJj4K7itfAt/1Tfx6mlHWRYReNFrpflEagApjg5uOeE6NguNfz7eqset9Qe5bSe6PxL3AUGlG6FXzANVqwdXDIGCDgwowwE1HsKk0ICrJh6xGrkIroRPmQSoThavCgMMCpSIgcNMRCavRCJnyIZlWTvpab+VMaR/WEs4B3HQVpmOSiufWUrBe3wVp48LbWicvA1YuShlDyoBKzgHcfE+CUa7824zAbV2WNo4LztUJ81BW5DAvzEFDgqMUIgrOJDGy6XZykixKZOr22kacv+mH+M1AP87cyYLDtN628kmcA7jpyL5miQwM4p1qEsh9HLvoBZkwpG8WtKcBzkv39ZV1LWDncBtfk9FKoVy7jQjnAG5SjSH5pQQ5RFhuy3BdRcAI2b+L94SH0On4Dd9DoDMijfDLRps80xu/dJwDuGnIWxUi7A9yCC6lIZMwkBinq4khf0hXYpBkgOvXUUBAWqv51ivQt1YF2MoGYhy4aUiq+SQkOFx2axXUqFfzJjpv36J7zqz3Y5BjcNmr11Gbvps3ZV0OY4Obhoxfni0/N0T2FZZjxqO0U1sx4vCpp+Ldnhvj/vU+eSmeN/aFp2dd59jgBG6emUHGr7TgnCH74mJI43rcbAuE53POMk2zNFImO/SC/CG5hmnABLYSxckjiOcIZPyqE9uG7ItLlXTsHdG9vClQPqg3UE0O5w5KgMWPCriAE/o8gngrwXMEGiC4tYh6w9Kq1xPOWFjK5PZvJgIHlrIU0A0u6v3G9yR4K0HCosCRt8IzhKXTaCEYYC44d7luLTB4jgwO4KL0+wSRReGthCfOZ6RnGHFWol5Mgj99RZ7HCmm0TaFTh/EI4abnItANDCXABgeV0aHdTzvVoK/jv//UZ48dVXXkrZ1yhfKd4WHlQC7BouzmaM3Z40bbswob3zSCePr4zOoaCr/L/F9PH2kEwXpbPx6BIAQruW2f31IUU/9u2wdMTnJbPwEHifa34BViUib6yFt533pl+NYte0TPBP5f/TfEP5Uv+NhfHjUrAAAAAElFTkSuQmCC';

	const inProgress3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABUZJREFUWAnNmd+LG1UUx+/cmSSTneyPYKmglVXQFipYRNT1d2v7IOqLFAQf+gf4JvShf4MPgm/67oNQH3xR8KG1Ra2ugoiCxVZB6rYFt5XsbpLNJJOZ8Xzv5EzOJDs2jZtkDyz33nN/nE9m5p57zl1LjSmt+jfH4qj+Thw1H4sif1HFvhdFrQKW07ocKMttau1uWtr7xdLz75fnn78wjinrbia126uHw9b6B2Fw+6kwrLl3M9e2q75d2PeDXd7/dqm0cnnUuSMBxo3Ve1vd2x8HnT+PxlFnpDl5AJYuxoXiQxfLzr63rMrK33njWH9HY/7WuXc77d9PR+G2zZNkqe2K0naV/jxl6YrpiqOGisIm/dXoryGHp3Vtz4XF0iPvuQsnzqTKHSq5gHEcW63Nz88H7atHUZdzbaeqCu4h5ZQeVrazX3YN1cPuuuq2/1CBf0WF3Vqm37KsuFA6eLG8+Npx1DOdvUbGMA+I46+rzdrNn7ud6w+wDqW255VbeZbgHpXqkeuB/6vyG9/SU61n5jjFA2te9b4jlvVC9hfQqCFAPK1m7ZO/up21A3KVkvcEwT1HKkeqx6h3CfKSajd/zMxNIN9cHnySOjOKGnitEs6yHDW3+ArBvUS9/xcO1hyzFtbE2ix4W7DNbS4zgNgQ+Oa4Ewt41ZP0Sg+zatdKrIm1JSRsg0EaSV8xXEm99dMNuVvxKycBJwEC/7La3vwiVWF3z5cfv59dUPoE4eckHL65ScOBCjZgiwUMYOG2AcQJASecKs1uxYaYjmDzwUOwgAVMaBvA0L/1oTwh4Ep2Z0OwyTuV2DiwmQhYcKSilQB2bj3Z6yPHCyc8np/jNcYpYRO2WXDeo64RlciDHyfErETaBhPYNEImCYTja1YyaBtsDuI5BsLBL8/WMFgjr79KZ+g6xXgVevUHacc9TcPTzW+mIjjwG18pcramTacCfVMvpsEDr69URCfI93QuX1URzYEtt7Ki7EJyoqINBg4wwOaYYLO3AqISFnKaOFUUHX1GFUZtFTa+U93gpvKWTvIwBbjGPx+RwVaq67R+owDhmqrccyoD2dz41Oh5IJ1Yqlm7rihYUBQ0GDUYGBBsGpEwT0DIlEis/K3zKRz3o4RhRCYseHISjvXQoY8FczB3UPAAYEup5EH0GaDyPc1hOiZyPBeFGzsaxRhIl149C79WbstS9sk5cgzq+DGwCWEG1MGW/Zh6vwKds5NsWKhNgtOjoY/S1LS9hMQnl9HpfdQYgA2RJ7JPzhkcD1uwCWEG1MGmkX2hAUGYnoil3IXjFGmksURPT0ClZdrNfV+J3brTj4EOfSxJBL7MzbSEDdji0LTPAJXbdJAahkqZ7YscggW7SlfLOW6GRyXfDHbrKG7GW3rjP90MVpUMYHOQt5L+waSzYXwe+0L4J6+a+Cj05wk+7PLCq3ndQq/Jjz5j/oQyrcLfsouBEmwaSXU6gipIcGYlg7bBppHxI6lmKOnjWDetUtoGE9iMm0HGzxBIDZF9TVtgU6alzJQA0nUEMn6GQmpIL5ubUyiR6cFmImDBFQlaBhB3JbiOSLqxk+o04RI3J17ClsyVwcL3N+lJgrsSJCxMg7wVCc2kBTZkjgwGsLDdFBBZFO5KZOLc2jqnwuAGj931EmvDBgtsGwZxqTR0VGxvfPZlx79yrD/JIR93wmRfrNuNEk8OcHHc/9aL7qELc0uvvyzXHwJMrj7OXkOmLwfO6upjCBBQe/ryiJ8anuSevX5jSJR79gJTQu7pK2AJai7R6RYipERf5tJyTF59opfoOxmd1r8h/gXXeeDQVUcauQAAAABJRU5ErkJggg==';

	const inProgress2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABPFJREFUWAnNmc+LHEUUx6uqe37tzP4YDBE0EgVNIIIiogZ/JiYHUW8BwYN/gDfBg3+DB8Gb3j0IelXwkJigRhdBRMFgVJC4JuAmMtmdmZ2e6a5u37d6X8/rnZnszjgzuw+Gqnr14322u+vVe7VaTSid5jenk7j5VhK3H4njYFklQTWOOwUsZ0wlVLrcNqa8oU31Z20W368sPntxElN6nEnd7uoJ21n/wIa3nrS2UR5nrufVA69w6HuvcvjNUunklb3O3RNg0lq9uxPd+jjs/XkqiXt7mjMKQJtiUig+cKniH3pd107+M2oc63c1Fmyef7fX/f3t2G55PEmWxqsp49XpV1Xa1FxXErdUbNv0a9CvJYdndeMt2GLpoffKS2ffyZRDKiMBkyTRnY3PL4Td306hLud6fl0VyseVX3pQef5h2TVQt9G6irp/qDC4qmzUyPVrrZNC6dilyvIrZ1DPdW43coZ5QJJ8XW83bvwU9f6+j3UojbeoyrWnCe5hqd5zPQx+UUHrW3qqzdwcv3hkrVq/51Gtn8v/BTRqABBPq9349K+ot3ZErlKqPk5wz5DKl+oJ6hFBXlbd9g+5uSnka0d3PkmTG0UNvFYJp7WvFpZfIrgXqPf/wsGa79bCmlibBW8LtrnNZQ4QGwLfHHdigWr9HL3SE6yaWok1sbaEhG0wSCPZK4YraXZ+vC53K/7KWcBJgDC4orY2vshU2N2LlcfuZReUPUH4OQmHb27WcKCCDdhiAQNYuO0AcULACWdKt1uxIeYj2HzwECxgARPaDtAGNz+UJwRcyXQ2BJvcrcTGgc1UwIIjFa0UsHfzie0+crxwwpP5OV5jkhI2YZsF5z3qBlGJPPhxQuyXSNtgAptByCSBcHztl+y0DTYf8RwD4eCXZ6sN18jrr9IZuk4xXo1e/THacU/R8Gzzu6kIDoLWV4qcrWvTqUDf1PNZ8MDr71bCNhg4wACb74LN7ZmISljIaeJUUXT0OZWNu8q2vlNReENVV87xMAW41r8fKQpWM12v8ysFCNdU7a43xoYEAwOCzSAS5pURMqWSqGDzQgbH/ShhGJEJC56chGM9dOgbV/oMNJPYDIfpWIjjudjeHmqUjUX06ln4tXJblnfqk+NknRmgA1v+Y1JDQzI5fw71PINxCc62WfooXc14K0h8RsL4hX6YiA0xSu7UN2oOM6AfbAbZFw9GmJ6KVuWlMxRpZLEED6Eo+ijt5r6vxG4d9sdAh75xpc9AM4nNR2polXLbFzkEC4XiytQrI9wMj0q/W+zWabgZrCoZwOYjbyX9/Wlny/k89oUevcpqvf86MWaY4MOuLL08rGssHfwtuxhMBJtBUi1XQYKzX7LTNtgMMn4k1QwlfRzr5lVK22ACm3MzyPgZAqkhsq95C2zKtJSZUkC6jkDGz1BIDenM4OYcSmR6sJkKWHBFgpYDxF0JriPSbuykJk24zM2Zl7Alc2Ww8P1NdpLgrgQJC9Mgb0VCM2uBDZkjgwEsbDcDRBaFuxKZOHc2zysbXuexUy+xNmywwLZjEJdKA0fF1u3PvuwFV0/3J/nk48667It10yjx5ACXJP1vvVg+fnFh5dUX5foDgOnVxyfXkOnLgft19TEACKgDfXnETw1P8sBevzEkygN7gSkhD/QVsAR1l+h0C2Ep0Ze5tBwzqj7TS/RhRuf1b4j/AJjOqyohekPeAAAAAElFTkSuQmCC';

	const inProgress1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABJpJREFUWAnNmVuLHFUQx8853XPbmb0MhAgaiYImkIAhSDR4wcTkQdC3gOBH8E3wwc/gQ8A3/QZCfFXwITGBeFkEEQUDUUHimoCbwGR3ZnZ6pvt0W//TW73VM9tkM07vbMFw7qd+292nTlWtVlPKoPvt+STufpDE/RfiOFhWSdCM40EF2xnTCJWu942pb2jT/FWbxU8ai69dn0aVfpxFw+HqCTtY/9SGD16ytlN/nLWe1w68yqEfvcbh92u1s7f2unZPgElv9YlB9ODzcPTXuSQe7WlNEYA21aRSffZGwz/0nm6d/bdoHvc/UlmwefXj0fCPD2O75fEiWRqvpYzXpl9TadNyQ0ncU7Ht069Dv56cntWNt2Crtecv15cufpR17lIpBEySRA82vroWDn8/h7pc6/ltVakfV37tOeX5h+XQRN1G6yoa/qnC4LayUSc3rrVOKrVjNxrLb19APTe43cgp5glJcrPd79z7JRr98zT3oTTeoqq3XiG4k7J7z/Uw+E0Fve/pqXZza/zqkbVm+8lTWr+e/wto1gQgnla/88Xf0WjtiNyl1nyR4F6lLl92T1GPCPI7Nez/lFubQr57dPxJmtwsauC1SjitfbWw/BbBvUGj/xcO2ny3F/bE3ix4W9DNbS5zgDgQ+OZ4EBs025folZ7grpmV2BN7S0joBoNUkr1imJLu4Oe78rTirywDTgKEwS21tfF11oXTvdg4/RSboOwJws5JOHxzZcOBCjqgiwUMYOG2A8QNASOcdbrTigOxP4LDBwvBAhYwoe0AbXD/M3lDwJTM5kCwykeVODjQmQpYcKWilQKO7p/ZHiPDCyM8nZ3jPaYpoRO6WXDfo27glciLHzfEvETqBhPYDFwmCYTra14yrhtsPvw5BsLFL+9WG66R1V+lO3SdfLwWvfpjdOJepunZ4eelMymhGwzsYIDNd87m9vbwSljIaOJWUXT1uS4bD5Xt/aCi8J5qrlziaTMvwcCAYDPwhFkLXKZUEhVsXsvgeBxlNLzjPBPZN8v6DgPtSmyG3XQoYX8utg8V9RfqjejVlyXMgP3BNvYx7eqSlcVSsG+ewbgAZ3sqfZSuZrwVBD4FG5AJr+TcxMJ50wwwA9aCzSD64o3gpqeiVX3pAnkamS/BU8iLPkqnuTxbucNAKonNR2holXLHFzEEC7niyrQbBWaGZ82+lAxg8xG3kppnoArHGzaPbaFHr7LZLu91QqcU6GYTg36wGQTVchICnHnJuG6wGUT8CKoZCtHXvETqBhPYnJlBxM9QCA0Rfe23QKcMS5kpBaR0BCJ+hkJoSHcGN/ehRKQHnamABSkStBwgciVIR6TDOCxdFxpyu+wSYaiMlcHC+ZvsJkGuBAELwyBuRUBTtkCHjJHBABbWmwEiikKuRAbOg82ryoZ3ee7MS+wNHSzQ7RhEUmniqth6+OU3o+D2+Z1FvmosXXTRF/fNosSTA1yS7Hzr1frx6wsr77wp958ATFMfV+6M52XmlfqYAAT9gU4e8ePFkzyw6TeGRHlgE5gS8kCngCWoS6JTFsJSoC9jaTmnqF5qEn03pfv1b4j/AJ9Teo5QiQZ+AAAAAElFTkSuQmCC';

	const failed = 'data:image/png;base64,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';

	window.jenkinsStatusTabIcons = {
		success,
		inProgress1,
		inProgress2,
		inProgress3,
		failed
	}

})(window);