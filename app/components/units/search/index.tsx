"use client"
import Link from "next/link"
import styled from "@emotion/styled"
import React, { useRef } from "react"
import { useRouter } from "next/navigation"
import { getSummoner } from "@/app/axios/riot"
import { setUser } from "../../../redux/features/user"
import { useAppDispatch } from "../../../redux/hooks"

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const dispatch = useAppDispatch()

  const searchHandler = async () => {
    if (inputRef.current) {
      if (!inputRef.current.value) return

      const summoner = await getSummoner(inputRef.current.value)

      if (!summoner) return

      if (summoner?.data.name) {
        dispatch(setUser({ ...summoner?.data }))
        inputRef.current.value = ""
        router.push(
          `/summoner/${summoner?.data.puuid}/${summoner?.data.name}/${summoner?.data.id}`
        )
      }
    }
  }

  return (
    <>
      <Logo>
        <Link
          href="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            if (inputRef.current) inputRef.current.value = ""
          }}
        >
          <Title>Seeker</Title>
        </Link>
      </Logo>
      <Form>
        <Input
          type="text"
          className="input"
          placeholder="소환사 명을 입력하세요."
          onKeyDown={(e) => {
            if (e.keyCode === 13) searchHandler()
          }}
          ref={inputRef}
        />
        <Btn
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            searchHandler()
          }}
        >
          See
        </Btn>
      </Form>
    </>
  )
}

export default React.memo(SearchBar)

const Logo = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.span`
  font-family: "PyeongChangePeace";
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`

const Form = styled.form`
  margin: 1.2rem 0;
  position: relative;
`

const Input = styled.input`
  width: 20rem;
  height: 40px;
  padding-left: 4px;
  outline: none;
  font-size: 16px;
`
const Btn = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  width: 20%;
  border: none;
  background-color: #b9b9b9;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  :focus {
    border: none;
  }
`
