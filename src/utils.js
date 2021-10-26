import { message } from "antd";

export const errorMessage = title => {
  message.error({
    content: title,
    className: "error-message-custom",
  });
};

export const warningMessage = title => {
  message.warning({
    content: title,
    className: "warning-message-custom",
  });
};

export const successMessage = title => {
  message.success({
    content: title,
    className: "success-message-custom",
  });
};
