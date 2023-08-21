import React, {useState} from "react";
import { useSelector} from 'react-redux';

import Cases from "./Cases";


const cases = [
    {
        id: 1,
        number: "#20313971",
        solved: "Решено",
        critical: false,
        theme: "По Вашей заявке Новый магазин -0349 ##RE-253420## предложено решение",
        problem: "Добрый день!\n" +
            "\n" +
            "Прошу Вас проверить назначение для магазина.\n" +
            "Кофанов Александр\n" +
            "\n" +
            "Инженер 1 линии поддержки\n" +
            "\n" +
            "Направление комплексной ИТ поддержки",
    },
    {
        id: 2,
        number: "#243212321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 3,
        number: "#386738742",
        solved: "В работе",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 4,
        number: "#32132112",
        solved: "Решено",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 5,
        number: "#2422321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 6,
        number: "#38698778742",
        solved: "В работе",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 7,
        number: "#3253431312",
        solved: "Решено",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 8,
        number: "#2386512321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 9,
        number: "#389742",
        solved: "В работе",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 10,
        number: "#7213561312",
        solved: "Решено",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 11,
        number: "#6323762321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 12,
        number: "#1867386442",
        solved: "Решено",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 13,
        number: "#021325312",
        solved: "В работе",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 14,
        number: "#6323143321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 15,
        number: "#4667456742",
        solved: "Решено",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 16,
        number: "#63421312",
        solved: "В работе",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 17,
        number: "#09862321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 18,
        number: "#12824742",
        solved: "Решено",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 19,
        number: "#7865432312",
        solved: "Решено",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 20,
        number: "#72512321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 21,
        number: "#52838742",
        solved: "Решено",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 22,
        number: "#754121312",
        solved: "Решено",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 23,
        number: "#62312321",
        solved: "Решено",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 24,
        number: "#519738742",
        solved: "В работе",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 25,
        number: "#63221312",
        solved: "Решено",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 26,
        number: "#4322321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 27,
        number: "#865738742",
        solved: "В работе",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 28,
        number: "#4121312",
        solved: "Решено",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 29,
        number: "#421321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 30,
        number: "#7548742",
        solved: "В работе",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    },
    {
        id: 31,
        number: "#75621312",
        solved: "Решено",
        critical: false,
        theme: "Сломался холодильник",
        problem: "Сломался холодильник, нужна помощь!",
    },
    {
        id: 32,
        number: "#2122321",
        solved: "В работе",
        critical: true,
        theme: "Не работает касса",
        problem: "Не работает касса. Нужно срочно починить",
    },
    {
        id: 33,
        number: "#33338742",
        solved: "Решено",
        critical: false,
        theme: "Проблемы с сервером",
        problem: "Сервер перестал работать",
    }
]
const CasesApiComponent = () => {
    const [solvedFilter, setSolvedFilter] = useState(false);
    const isLoading = useSelector((props) => props.cases.isLoading);

    const handleSolvedFilter = (event) => {
        setSolvedFilter(event.target.checked);
    };

    return (
        <>
            <Cases
                isLoading={isLoading}
                cases={cases}
                handleSolvedFilter={handleSolvedFilter}
                solvedFilter={solvedFilter}
            />
        </>
    );

};

//export default compose(withAuthRedirect)(CasesApiComponent);
export default CasesApiComponent;