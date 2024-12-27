import dayjs, {Dayjs} from "dayjs";

export const rules = {
    required: (message: string = "Обязательное поле!") => {
        return {required: true, message};
    },
    isDateAfter: (message: string = "Нельзя добавить событие на прошедшую дату!") => () => ({
        validator(_: any, value: Dayjs) {
            const current = dayjs();

            if (value.isAfter(current)) {
                return Promise.resolve();
            }

            if (value.isSame(current)) {
                return Promise.resolve();
            }

            return Promise.reject(new Error(message));
        }
    }),
}
