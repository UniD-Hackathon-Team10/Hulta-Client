import { colors } from "@constants/colors";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface CategorySelectorProps {
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  options: { label: string; value: any }[];
}

export default function CategorySelector({
  value,
  setValue,
  options,
}: CategorySelectorProps) {
  const [open, setOpen] = useState(false);

  const onClickOption = useCallback(
    (value: any) => () => {
      setValue(value);
      setOpen(false);
    },
    [setValue]
  );

  return (
    <Wrapper>
      <Container>
        <Label>카테고리</Label>
        <Selector onClick={() => setOpen((prev) => !prev)}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {value.label}
          </p>
          {open ? (
            <ChevronUpIcon width={10} height={10} />
          ) : (
            <ChevronDownIcon width={10} height={10} />
          )}
        </Selector>
        {open && (
          <OptionContainer>
            {options.map((opt) => (
              <Option onClick={onClickOption(opt)}>{opt.label}</Option>
            ))}
          </OptionContainer>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 4rem;
  width: 100%;
  background-color: #fbfbfb;
  padding-left: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin: 10px 0;
  position: relative;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const Selector = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  column-gap: 8px;
  align-items: center;
  p {
    flex: 1;
    width: 50px;
    text-align: left;
  }
`;

const OptionContainer = styled.ul`
  list-style-type: none;
  background-color: ${colors.white};
  position: absolute;
  border: 1px solid black;
  border-radius: 4px;
  top: 40px;
  left: 40px;
  padding: 10px 20px;
`;

const growDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
`;

const Option = styled.li`
  font-size: 12px;
  color: ${colors.text_primary};
  padding: 5px 0;
  animation: ${growDown} 300ms ease-in-out;
`;

const CreateButton = styled.div``;
