import React, { useState } from "react";
import { Flex, Box, Text, Button } from "@radix-ui/themes"
import { useSignAndExecuteTransaction} from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import toast, { Toaster } from 'react-hot-toast';

export default function Page() {
    const [isLoading,setLoading] = useState(false)
    const [gongDeSum, setGongDeSum] = useState(0);
    const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
    // const account = useCurrentAccount();

    // 获取当时时间,使用的浏览器类型
    const now = new Date();
    const browser = navigator.userAgent;



    const muyvAudioFunction = (event: React.MouseEvent<HTMLImageElement>) => {
        const muyvAudioVar = new Audio("data:audio/mpeg;base64,SUQzBAAAAAAAJ1RTU0UAAAATAAADVVBZVU4gVHJhbnNjb2RpbmcAAAAAAAAAAAAAAP/7kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEluZm8AAAAPAAAADAAAFTgAJycnJycnJyc7Ozs7Ozs7O05OTk5OTk5OYmJiYmJiYmJidnZ2dnZ2dnaJiYmJiYmJiZ2dnZ2dnZ2dnbGxsbGxsbGxxMTExMTExMTY2NjY2NjY2Njs7Ozs7Ozs7P//////////AAAAAExhdmM1OC4zNQAAAAAAAAAAAAAAACQCQAAAAAAAABU4qJc6qwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7kEQACAG1SCrQIjTyOWqFmQQN00uRIs6UlYAJkykZ1oSAAAAAGCSTdI/0v/5kEcWIP93Iv2Z//9Xdv/9nOT/dqKhXFkOn/9vNwmYakHGJkLb+qUnB5hZIMBgEAEME2f6X//pf/+gD//qWkeNDdBf/7O7P/9akT5uYLUi7OzOz/b+7oJmBPIgxRLhIBuBexwE84ukAgMk9ZOaSCAXE9fVCAkY2MYx8VFvinvTJ8Mffvtj69k2wkEy9lMZ0+k3+/QNLmGb74embn7pMlk+rhn8245X/vp7K+KewkB4HY1xxUEsAgjOOe+XySz9vegSDmIAIgGEAABnUDCi+hHJZBji4+t5d4kXeE+BRT+KQUMqXtESb5e4TLP////m0GClfTkCgN7SnibQsG4jwk5AeHuyeWfDln38IKA3EeOA4BoDQxBoNz//+KgFAcicPBglBee/kFhkI1SAAIAgGAQIMIAAAHsxIBdLYlAKQkrEnErWvEAzCyr1CPyav9AcArQUoOfVegunC6gU8QeDYPEOZldubqEAAcDEogMAwOSrBgmu7bf/7kmQlgASgZj3mNoAAWgxn8MU0ABBJPYG5hqARCpUvvxZ0ArmmHqEMJBMDNCBKIj//Xs2pkwJCA/wCggDXEBbSoMyMmGrF/0Mrq+t3hsZgs2omh0wGZD57f/57/+b1puYHhShm6kJon////5vx8F56gQeF2N/HOl+w8z39h7mJuZ/2wVA/EALgSn/vTNSIHMDgBW//8eZSJRMDzJBP/v/iWEoeWO8eZ0e45//tf1ck1vsykx7BzP//f/+yTJutMp7gj////5vf7vcibV7zR5nRaMBgO3n2u6YBfnL79S2hMw5X6ziKbsCTAd0Hm7yQABuPKgi6BgeTGQI2J8Egrdbp7KLQ2wnYxxz1EwLwMGUkEPL42D3cTM+aJy+aIv23NC0cBQRHGbJpj3RZNl3t+F/E8IB5NyQPG////oFw0mBofWbr//9BRBBaApGkWgGcGgGcNxILgIBQAPIgCHFHFRJzVj2Cf6KONkyaDgF35hhk89G8q6uYquTP/ZT/s3u26DQvvAZDv93v/0soJomkIABQCAAJWBL/LilrclhoajVd9nb/+5JkCwIESUvZ92HgADZBO17niAAPxK9V7D0swNMFq3zBnRCCrEajUtXL8ztZPMz5i9aGcTuCD5JpuDBe63dZjO9eute0j59dlQ6NBTrY+tbMFck6Q5XM13r1Wq3DIZTlBm3nWLf4li1gvo1vl6nVCy2zquoOvb/f1i1ra/xa3/9a1+fa3tbf//381xCjPkR4Kr//7esNRHS4AcAEgCxav2T0JQWJOHmf9a4t8ZwM8/EpMKQ048qvYHVCyo4FeEg7f1gr5F9H/0a+ShryNdVIAGoAApAdJ9U6I5LWxIrLDUzwxFJQOEcxMmclWiFycrGpYUZxRAA+YDdAorBodZyTgBAaStbp1lppNrNMup4lmlslTKALjngt+Xg8GyVIsaQ3sN/XFqRUgHBx5kcFRW2KlVAWsGQ0aY2UPljAMNFmBxuSiiA7ZYZQf/NxeuvTAFkAAAAYw2h8PKw2E0UM+yDCag+SoCIcWTJu93esiz6YiYGmN/67jbyjDqv//zUuvaQqirhAABAAAApuDwuQwBW9isFPNHXUcwQ4DMFmFePJB8YV//uSZBCCBHA30vMPM/AzwOqfBYYSEQzjR8y8z8DBh6p8MJkg87ZiBHXBMS2pdGi9XTLEo2rhTpdz3AjJ3LfdsmVrxrgKlskeLbDrbhmIcAmcRymiIu9ILmul1KdcJUeXIShRaB533GFFD0n1/YTEQYUcMNVFkJOAEsMG0WOWUe4nKip6ApkLlKXRVh2Eql6Gj3jbMAIwCAAANu3eKwhBV3kStYOZGsqdlye/mVgLIrFHLaktY3V90kt3+WJxhudZ/93+37VmWQAMQAAlmTjhP00ZwGlR6fZU+wOPDaAzFNWMRiGWdjtWaDMjy8RyxB2Mj6kCOqVKUbau3ByzHgPLqqzKxIs/3jp+rp81hmgwj4LkoL0a3BoocikQ9KOUBvanzxFBRK4Ol5Y12wNz3qYSe02dK7QJJF1BvNq1MlWW5HFKDqKhC0zDq3a3KeF0RdTQAbEhAATcppVSiIHAZ0w+PzTSBV6FV+j5R/1dfWtIdtRFzH3t/9f2bUf0J/V56kiFcAAgAAAWYLRQxSQS1hmcgqoONxAFQDBoStj60k5RxiR4cv/7kmQSAgSDQdBzD0VAMoG6TwwjYhGA4z/MvY2AyoOpfAGICObfRMG87AdV/GNhn2wvmM/zAZi6ua6W3FRtanXeVOwVjq5KqqGyvnxBxTkiyNTUwznM5ucUuE+E6+YtolMsCllTdW5rGvOomCotIwcohN33SCtfFf00UcJVkss+NX1vfYtwcVlnZtKlPUkwsYktTiAooAAABOXRegAWLWARPrA4LwGFzjMUUcyE31kiXKiaZRt/pp/v///4lyf2abNaFK9QwABEAFNBpJ2MLXXOz15X7YbFhQokRB76FqLsl5Ij/LG2vGYGkqCVCIpxuYJIr9DygIs6nz7GrTNZzR4i5IKSXv1hijRVPGWQSaFxJdbNTGJGA1flj8hlb3ZYutipsW0Ylr1n/aZv7dadAv56REqUHkqlkqaWFKyAcOugFga3BohaZcpSLRyCFMXUEVEoBKgMkCKy3GV4QJUIycO2tao0tLna/4qvt9qNKg8a3No+gba2KRrk8jRpf9/b/7q6a6rBA2EAAADL6bbiq8bu3V7moP2kRtApNYMk/pCJyhb/+5JkEAIDv13R+wwbcDUA2j8AxwQQuPk1jLzVAMuQJqxQjbBc8P6dY7FpyXk+98zeFOmovamtauxP23VVZr18n7NGpJZYPI2Bmw8FrIWRG/Ps8mh9aUn4+2//mfpw1v2I14zN/w4Skxe9zJdf//9Ty9j6WigR2GUD2VvUETbWAwYEEhPXNq9AqTA0gEnkeLXI6Oyz6GdX19PayVV9SjBcNPODEJJImKGGY36tDWJ+5tR22ABAAinxbjLIKfpr1eVtabiFkDFnCXUl5HNQZOfLabCxnIrctCxTZLcZ4/7CzqQwUOfP2KOpXyh05VyPtmZ4CPYYDzL3ZAxDVWrks0XeMTKeSVTzOvI9IwHFyMGnBmSKcvOaaGJUgYaidgUUXCiW98jX3X5UBRQ0rixeqKLHHj4NLDeQUJJsBCIG5CMS7qFgIDNPkjlVh64kYiyNeTOsPKGEEAY7Kizx5dFzPCuuav+3+iu1N4UWujPcACAA0WvRm8xFg8cuuC/EBDhAYBFqIsnsU7ktRrxcOlWbEIU45XJw1WPFqwRl+C4w2xuSF2Cj//uSZBwCA9w2TNsPM/I1ZOmLCKPQDUTVNYwwdQDaEqWsMI2Qc6UIdcikXJtxZLblRJlElVzXalIqeWnpk6goaq4cdDtq9sq8ejD9WNee8m3OjopNZn2QEFg4XltM7vYHy/pjtv5/6oDcgAYEAdyo5ThAbgIjdyq7XpUKM62bolG1ZEoGvGWbiQiFO16QNwcOgrq4htSJBChW3//V1l+4BoAHJfje43Zh0xuCLNcRjLthj4xUfmQWrtLnjTWsV16dpyLrOR9bBf6CiTGTuLUJ5mYIGmqtlrvg1aVk5OMl8FOotWle7aV5q/zZSJ83TKqMm8PMU40BkXpkZkcLUNkmVT0VFIDiRhYBRAAAAFP4UWBqeJ5V0pFQbp/w1yO6Hkq5Qf0P8o8XV70oMtINCHye9zBSeFX0PRp3/36lKflaFDeAAjIEAASoI3nK7lS69mCsi9dEBQpcuI08ir2j/KHPKGkwOSPJ4uuexOLiCaVvG53Q2udZjB2Pv4zHMVH7MFQyPVxps3NEw83RD+Wac/ytzPHb9juSwUUGjl/+3/Q3wgp/8f/7kmQyACNxMs17DDNyNeQZfBgiag1EzzGMMG/A3RAk1BYU0ENGxiEuqjFra3IDJACkAAGiPvNrSi0+wMnt5xMYWPNd7q3/UplVP5ga15ERB/zfWjo38igiqihJJMAThaitpSgm2gNgAAvk9T76+1JQSiAm+oRCt6SNMogOkj52p9ytZORSuGsix2d79qOJItQ9vl69DvrXedrNo4IoYl52EO3/c3nYG7WRHrUlsjksuayCg5bKJwfIkDnuFGBIkRAQCCb4az8+Va+LEoWIGMETmIbe7QhQhV186LdyCiKbZardOlOrP0sWd2CIZsUIjZgbojkdbrY5n7kVPt8BD3PEKbFjA9UPw8AKt0+8ZRLYzYr0FCDCuQR+c9//uS6YyjGWf0COWmex6JQ2p0FzhsbM0e+aWbmdKp+dLZTWaiUMagNJ2YGttNmygifeteBHLNLzsbgQT9dhJIz04LMuNrQGt6FtRdevQlp0+LKDqwdwgAAeqIExwU0wAqfeSj0BZ2PWUNqyA5MIChUm9sFgqE784hWcUcYte9W6+pDqMjZvmFj/+5JkTgIDQDhKQwwdQDcg+TgIBgANCK8phOGISOOFJXAwiQCrEsWC1AEiAYJ7fINhCGNB2VMFSPAZnuEZDXNKoOm61grRk0lWQf3PXkYYsVTbVy8mT1aMJuo7BS1k0bwFFyh1bNYl8Jm/aFac2Y3fzYZfb2rz0zzyeXDv+jZ7jm/93doK8TugW74wvAC9QSClAJSIAGizQ3aAg6QgrbMLAARethgtGrT9+il3uZ+2rMrUq2L1ND5kCpMpRYDjpFTXjEChc8AypVUoAAMTpa9qis3K9DNwVKxo4tjGLakvMZzdvHUaXTPu9EL78T67nxzFpZP1OtUmy7+iwc0R1Z2BfRMmRlcc0A8ejUaloSVTjTSSKY2QYVkVorWMUOKSmSuakOKpdq1x3DfRYVyZmS355+hNhalkvQkmCqAoFeHEECGQjpPIl44pLL3I6WP22467qsgJwUXFL1oGKU1o+HN5IqKnTxkkBAsSlG7VMOpnngKFAQtvZ4jCsPWxSwVoH0Oo1C3J1PNzjEeNdI8KsGONGa2KLEs4hUvLKqfQpI+rShYh//uSZGyDA3A4SCsMHUI44WlcBCYMDPUBHwekdQjxheSsMQzAtdnaj9KrnRTHLySWA0+ays6tuAg1QkYz+Hxo4SptF5PNZ5Uv4GMNI4xBjPI9udxaEfx7HjqACkAYwjQKbizqBOjkb3lFGLGhMgOvIiiT4W3B9ldwQ6hVYlPtQOXAypo85Ank1PA1WvpfR2ieIhto1qA+AYAHb0KbZJcbbWVOkYJ+WJliqdINPKEbuNqEFoeRdVdqy7ulRD1d0w0pRh61S+txrU29PZJkfLooH7S+hHOzBB+0UUCb4mRGZaI5XJl1ySEiKpJHN3UzJ5TfijkWAVLJRDJJoZB2xh8O8gAIAjYECDfK96jiaRIns9vRHA4RG1B2WuQLuWlQNgT714oSSKNU73IWq2LmwK15i9SlBC+sXvFJu46o4WJAvFssEYmsuJ1C2glAqNlQkohCTIbkNTGBK61xKL4xaLUSAxiUkRuf1T5RuVOTlXlilJNpUBLgEeFCCq0onLWMvmTLkvtn0lQ1cYCUzWTlGFfrD9FNVJWon///+lKtsFZEFAGVpv/7kmSGCxNRRscp7BvyPGGpGwwmUAxJTRkGGHTI8AzjlBANABNMDawU3C2wwEYCmTVVUqe1Xb1XWBRp3LYaBsJQ6sivAssp5W7gFcidCjw6k695Z7sYe34wexQOpk0JEjMomxSUcimyim5ErqFRohg0Qtj4w25rDWrKrOQZf/pfsbMayVGqqs/YKTGSqpeql9XARmNSnJxqlsdtyi1HIuAVEvhxJteW2ZlyMFkcCio7Z8gKrzKM+4rTyV6rDUNSikyivGsMBpNV17/lKsh6z/akf1df/7/nxqrGq+GbyDH5cUmcBJSi0FRz/Td/7kUZlyOPP8nI////9yJEijMgo43GJEgFZDtTVztOw2Zk1EiRJEgYKfZ+lDh4RsuQVB7VTS5/pdGqamxCiVVVVWZmZmZlVVVVVYzMzbdKrrrw4f//5awLSJGwkgqVFD74q3+pQ1hQuoBtjMjMoQ7bAM2cFJtEl3nPioEBAQZgyrlqwUECDo5fZHh587/6y1H///9URW+qp9FX9FX/////qiL/+YoYGDBMy6z//11MQU1FMy4xMDD/+5JEooziiEa+gSM1UlTKh/AkZqwJgMjKQ2BwgSeo2QmRiXhVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"); // Replace with actual path
        muyvAudioVar.play();
        setGongDeSum((prevGongDeSum) => {
            const newGongDeSum = prevGongDeSum + 1;
            return newGongDeSum;
        });

        const text = document.createElement("div");
        text.textContent = "功德+" + 1;
        text.classList.add("floating-text");
        text.style.position = "absolute";
        text.style.left = (event.clientX - 20) + "px";
        text.style.top = (event.clientY - 30) + "px";
        text.style.color = "red"; // Set text color to red
        document.body.appendChild(text);

        const animation = text.animate(
            [
                {
                    opacity: 1,
                    top: text.style.top,
                },
                {
                    opacity: 0,
                    top: (event.clientY - 190) + "px",
                },
            ],
            {
                duration: 800,
            }
        );

        animation.onfinish = () => {
            text.remove();
        };
    };

    const mintAndTransfer = () => {
        setLoading(true);
        const tx = new Transaction();
        tx.setGasBudget(100000000);
        tx.moveCall({
            package: '0xef9c0d22862750dc43664121605a6733ca46e6725468a3ae3c0c4b3ef1f44db9',
            module: 'gdNFT',
            function: 'mint',
            arguments: [
                tx.pure.string('今日功德 +'+gongDeSum),
                tx.pure.vector('string', ["时间：" + now, "浏览器：" + browser]),
                tx.pure.string('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFRUXFRcVFRUVFxUVFRUVFRcXFxUWFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0lHx0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABBEAACAQICBwUGBAQFAwUAAAAAAQIDEQQhBRIxQVFh8AYTcYGRIqGxwdHhMmJy8QcUQqIVIzNDUoKywiREU4OS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QAJREBAQACAgICAQQDAAAAAAAAAAECEQMxEiEEQRMiQlJhFDJR/9oADAMBAAIRAxEAPwDw4QhADoJIaKDSECSHSHSCSAiSHSHSCSAGSHSCSCSAA1R7BqI+qABYViSwrAEdhNEmqKwBFYaxLYawBFYFol1QWgCJoZoksC0ARtAskaBYBG0CG0CxmYQhADCEIAcdDDoAJBIZBIQEgkCg0ICQSBQaGDpBJDIJCB0h0hIJARrD2HHABsNYnoYec8oRlN/ki5P3I0qXZjGSV1hqvnHV/wC6wrZO1TG3qMWw1jdl2Sxq/wDbVP7X7kyniNCYmH4sPVX/ANc2vVKwvLH/AKPHL/jMaGaJJKzs8nweTXkCyiRNAtEjAaAI2gJIkYLAI2gGSMBjABDsYYMIQgBx0MIANBJgIJCA0GmRoJMAkQSZGmEmBJEGmRxNTQug62KlalHLfOWUF573yQrZJunJb6iimauh9AYnE/6NKTj/AM37MF/1Pb5XPRuzfYGhStKr/nT/ADr2V4Q2et2d1QoJKyVktyMufyfrGNGPB/J5toj+GOx4iq3+SkkvFa8tvojr9G9isHS2YeLfGf8AmS/uvbyOno0idQONzzy7rrMcZ1FGlglFWirK2xJJBfy5dsNYjxi/JT/lyKeFRoNEcibjBMqw8fomlVVqlKM1+aMX8TkdL/w6w1S7pa1GX5faj/8Ah/BNHoVQr1WKZZYdU7jjl3HhGnex2Kw15OHeQX9dO7svzR2r3rmc4z6PqTRyHaTsbh8TeUF3VX/nFey3+eO/x28zTx/L+s3DP4/8XjjAZpaa0RVws+7qxt/xks4yXGL+W0zWbZZZuMtll1QMBkjAYwBjDsYYIQhACEIQASHBQQgJBIBBIANDpgXO67D9mNZxr1o8HTi9i4Tl8l0ufJyTCbqsMLndQuyXYt1bVcQmo5NU9ja4z3pctvwPUNH4aNOKhFKMUrJRSSSW5biKCUEoxd72eVs3wXW4v4SndJ2z93kYM87nfbbjhMZ6XMPTvy5GjCCK9KyLMVvCQWjiyRICDCuNJ2xmNJgtiMmyGpINkU0KnEM2QVMyaZUrTtsyzOdXEVSC48/TxK8mvTeE53y3q+z3lGo1frbxyONdJNq+mtG0sRTdOrFNPZxT3OL3M8d7SaBnhKmq/ag/wT48nwke0VXfZ1yMvS2Bp16bpzSaa9Hua5o7cHPeO/058vDM5/bxJgs0NN6LnhqrpyzW2Mt0o7n48TOZ60ss3HnWWXVMwR2MWRCEIAQhCAHQ4I6ACQSBL+hdHSr1FBZLbJ8F9WTbJN05LbqNbsloTv5qpNexF5J7JyX/AIr7cT1KlJJJJbMtu18DKwGHjTgoxVklay3JGlRir7bv3eCR5XJyXky39PRwwmGOmthKe++Zp4WpnZGRQqXyt8C/SqWCFWrTkWY1EZlOsi1SfEuJW4zuSEKkP3haUjYrkLqA6xCkrmRVJgSl9yGpUtvJtORHORWqSXy8uDCq1r7FfzzvyKrk3791vlz8DjlXSRHVlyfz8iOUbrhveXls+Qcllv4b8uSsQ96lk/e8+vgRauI5b7eHiuJDUW/3fQrYzTtCG2pFPhe79FmYGO7bUo/hjKXC9kvqGOOVvqC+p7F2p0OsTSaslOOcHwdtj5P6HlM4tNpqzTs1wa2o6rSfbOtUuo2guSu/VnL4is5ycpZt5s9T4uGeM1kwfIywyvrtExh2Ma2chCEAIQhACHQhABRV8l6HovZvRyoU0mva2yfGT3J8Fs9TleyuA16neNZQ2fr+3zR3UJWyv1vfvMPyuTf6I1/Hw1+qrtBX8Pi95oYfr9ihRnZZeS33LlNpe1vefXpvMemm1pRkkHGpn8PkZLxOfMtRrKy+PH7FdE2KFVLYy9Ctlkc9Ctbx62F6jXRcqLG3Sq8/Ik1zNp1sh/5jmXalpa4EpFJ4tR2tLxM3SHaXD0n7dSN1uXtNeSucrVSNyVTpEE3flz4HC6R/iTThlTp3XGT1b87I5TSP8RK8/wAMtX9Kt73djnHnl1D8sce69bxdeKV21+puytyZgY3tPQhtqJ8VHP3+h49je0Faq7yk34tv4l7RfZXH4u0o05Rg9k6t4RfNXzkv0pl/4l7zuk/5E6xm3V6V7fL/AG0vGWb9F5bWcrpTtdWrZObtwXsr0R1mjf4X0o54nESnxjSSir8NeV29+xLYdFo/s/haD/yaEFq/1yWvJP8AXK78kG+DDr2e+XL+nkuGweKr506U2n/VqtQ85uy95sYTsHiJZ1pwp8s6kvO3s/3HqFbjw42+mW4ratuuumRl8rL9skVOCX/a7cSuwNK2dWd+Wp8LfMoY/sK1FulUu0rqMla/hJbPQ9Ck0l0irOoRj8nl3vZ5cPHrp4tVg4txkrNOzT2poA6ftzgVGqqqWU1Z/qWz3fA5g9bjz88Zk87PHxysIQhFpIcSHsAIeMW2ks28l4sVjV0Bhdaevujs/U/oviiMsvGWqxx8rI6jQ+HVKmo8PRt5tmhhZXd/TrzKUtmr+/MnhLpHm337r0OvUadOV3fctn1+BLLE5GV3tlx8bkFTHpZt7NnMWg2Y17b/AKZ7iWGLt892V3c5XFadexLJbNbdxMzF9pZZ2lb9Ct/dtt5lTiyyK54zt3uK0pCmld8882/mY9btRb8N/cr+f2ODraVbd7PxbuytLGSZ3w+NY5Zc+LtsR2wrPJSS9/vf0Mqt2iq3vKtPyk17kczKo3tbAO04J9uV579NnEack97b4tt/EoVcfOW8rJHadmv4cYnEWnW/9PS23mr1JL8tPb5u3mV44Ye0+eeTjdZvizruz38OsXibSqL+Xpv+qonrtZ/hpbfXVXM9P0D2ZweCzpU1KaX+rUtKo/B7I/8ASka08S3fpGfk+Vr1i6YcG+2HoHsXg8HaUYd5UX+5VtJ34xja0fHbzZsV6/F8uP7kdSo979dnX1K6l9DBnyZZXda8cJOinVtvyfHLhs3sGVV+7w+4nd58es3tI5tKy2ZZ5bWct109Bq8Pt7vMrTn18diJZzy322eJTqtPYuvrsHDDPPf8HvK8pWvyJpQ3+W/ffcRTjlcqJrn+12H7yhJ70tb0z+Fzzw9P0hG8ZJ7PkzzStT1ZOPBtejsen8S/psYPkT3KiEFYRrZz2HsPYewgZI6zRVDu4pcs/wBTzfXIwtEYfWqJvZHPz3dcjpZzssv3MvPl+1p4Mf3DdT7dePwCo1L3fXmRJZP0y9/yCnkjO0BxVayytd58rc+uJjYnFW5mpi6T1bnLY3EXbSXI68WHlUcuXjEWIxMpvN5cCAQjbJrpit32QhFjA4KpWlq04uT37klxk3kl4jt0SudF2c7H4jF2kl3dL/5Jp2f6I7ZfDmdF2a7L0qclOrarNWdn+CL/AEv8T8fQ7aeKfiY+X5UnrFpw4L3kh7P9l8JgkpQj3lVf7tSzkn+RbIb9mfNm9PEt/d/HkYsajv1v2E0a3H03fcx5cly7aMcJGgqvXAjlU339cv24kCq366sPKp69fQ5r0Ved0umQKVsnn8uVutwFWtu2ZeBDOqss0l8Fnsv8OZK5FvvFx9/zI3US+vW0rN55fO/O3vAqvZu3eK65cBGlqT4epBPqxHOr+3u3AVJ58d32DRgUtV+ILl6fMU3e/Xv3kU5WT8C5EZVFjFl5HnGl4WrVP1X9Un8zvsRUyZw+nV/nPwXwNvxf9qx8/TNEOObmVJqjqJMoEtChrSS55+G8XQjV0TS1IXe15/RenxLKd/XPy+4oq6+BIo/AwW7trdJqSJ4LJAV/dbr5EkHn4IGqr+pCmmsBrUtd74rm9i2LYeY1otSae1Np+K2nrXZutGUXRk83nFXtdPaubVvfyMPtZ2MnKbq0UtZ/ihd+1zTeSfjkdeDkmGVmX2jmwucmvp58I349kMVa7jFZXs5L4rJepf0VoinRalK1Sos1f/Tg9zSf43zeXjtNV5sJPV2zTiytZ2i+zsppVK16dPasvbn+lPYvzP3nVYGnGEe7pxUI70s7vjJ/1Px+xXnOU5Xbbb47S3Qp2z459cszJycmWXbXx8eOPTSwrts+vl47DQpz4szaMrb+vPaSRqbuutpkuLs0u+e4JSsUoVrD97w66yJNbeItv65Ayr+Sz25lRVb+nkJ1PUDWJ1b/AFf069wr8Mnx8dn19CtKf7iUufkL2e1unPdyyI6ktlufXXAicutw1Sfs5/ewAM5cntBbtnv4Ihq1H9uRBVq9bl4jkFTTrIq1Kub8SvUrdfYhnWe/rxOuOKLUleeRxulJa1WT8F7jpq9SyOXqq7b4u5s+Pj3WPnv0rWETagjWyr9LDuTsuuZvT0XClS1ldzcVrN7LSkti3ZIpU7Ry3vb4GzWmpwi1scdXzX7GLm5LbqdNfDxyTd7UaayCitviR0pE9PZc4uoqO9hWBiFEY2iTesnss73zya4G5DtJVStJRlbLPJ32Xe5+hkxp5+n1GaC+y2sYvH1Kn43l/wAY5Lw5+ZTefXzJGPEqTQ2koU/t8y3TIYxJUiL7XErdwovriRJLb1zG1rC0razOXXAGMsgIyHJuJ7S6w1t42sN4k6PZ9f09R4MBsFMWgndUCc8utviAgKiCYjZqnVyvUe0kdytVi8y5iVyRTmV4Z5ksluuRTkdZHO5KmkZ+zZb8jJ7s0q61n8CLujdx4eMYeTLyqj3Yi93I50QK9/FmxhP9N0081nHyzfXMh09gFBKpDJuSTW53vmjKwtGV1KbaSeSWTZi5OP6rXx57adVZ3Wx5+e9ElGWQsTJPNfhedt6fFFWnVXE5ybjpfVXIIKLIYzDUg0naejtfn8Aks+uIFOWfXCyCVTMNHspxGhu65haw0YgFiEg9cgQrkLTymMpXInILWGaZMNsraxJCVwG01xa5Hrja5OlbSN9bhlIj1g4sNDaRDytZiTBqyVh6RahkytUnYKtVKVast5cx2VyKcivOVxpVbhRNXHx691l5OTfqAUB+7J1EOMDu4qvdCLfdiAljtBW9lJbnfwe7L1Ofde2bZsaQe3I5TSb5s55Ybu3THPU0mxGls7LYQ/4muBmCD8WJ+da1PTDjxZfoaag9rt4nNCC8WNE5K7SljE80ywqyZwsKjWxteBdoaVqR25+JyvBfp0nLPt1utwJadQ5yhpqL/EmvevcX6OPi9jT8DnlhZ3FzKNdTEplDv+YlX6Rz0vbQ1h1PIoquOq6FpW13XCjVsUHW5jqqGhtf7zmJTKKq2E8QGhtoa6Q3fGZPFpFavpRLeOY7K5Nx4oq18Yt7OaxGmt0c/cZlfGTlteXI7Y8NrleWR0eL0tFZJ3fBFNYpy2mFFl7DSO+PHMXDLO1s0plqmzOoM0KCOiFumixCBFRiXaVMZIu7EXO6EMl/F6JT3HP6Q7NX3Ho8sMQVMEuAtKeR1+zjW4pVNDNbj16toxPcZ+I0MuAtB5RU0c1uK88I0emYjQfIzMRoPkL2bgJUmgWjsK+heRQq6IfANhzo6ZrVdGPgVp4BoNhBTxclvLMNJO2ZWlhWiN0nwJuONOZWNNaRz2hrSKvtMjVGsL8WKvyVr/4pzGWlzJEH4sR+StV6Y5EU9Kt7jPsLVH+PEedT1MZJ77eBA3cJU2SRoMqanSbdoR1AuU8I+BbpYF8A2TOp0C9h6Bo0NH8jQw+juQEpYagamHw74F3DaP5GnQwIyUKGGNClhy/RwXIuUsIMmV/LCNr+VEMN7uRnRLvdj92Bs54cinhjW7oF0hBiTwRVq6OXA6N0QXhwPbkquilwKVbQ64HbywxDLB8gG3A1dCLgUa2guR6PLALgQVNG33C0NvMq2g+RUqaD5Hp8tF8iGWiOQtDby2eg+RDLQnI9SnobkRS0KuAaG3lz0LyB/wAG5Hp8tCLgD/ga4BobeaLQz4Bx0M+B6StCcg46E5Bobec09DPgWaehnwPQY6FXAnhodcA0NuDpaG5F2jofkdvT0SuBPDRa4D0W3IUdEci/R0VyOoho9cCeGDSAOepaNtuLlLAm0sKHGgMMuGEJo4Y0VRCVIBpndwI0e7EMaTiQhACExCAGGYhCBgGOIAEBiEBI5gyGEAARiEAJgiEAEghCACQaEIDGg0OIANBIQgAkOhCAziYhDMwhCAn/2Q=='),
            ],
        });

        signAndExecuteTransaction(
            {
                transaction: tx,
                chain: 'sui:devnet',
            },
            {
                onSuccess: (result) => {
                    console.log('executed transaction', result);
                    toast.success('Successfully!')
                    setLoading(false);
                },
                onError: (error) => {
                    toast.error(error.message);
                    console.error('error executing transaction', error);
                    setLoading(false);
                }
            },
        );
    }

    return (
        <Flex 
        gap="4" 
        direction="column" 
        align="center" 
        justify="center" 
        className=""
        >
            <Toaster />
            <Text align="center" size="8" className="text-white">点击木鱼🐟,开始积功德</Text>
            <Box className="cursor-pointer h-64 w-64">
                <img
                    id="muyvImg"
                    src="./muyv.webp"
                    alt="木鱼"
                    onClick={muyvAudioFunction}
                />
            </Box>
            <Text size="9" align="center" className="text-white">功德: {gongDeSum}</Text>
            <Button loading={isLoading} onClick={mintAndTransfer} size="4">
                🙏功德圆满,提现功德🙏
            </Button>
        </Flex>
    );
}