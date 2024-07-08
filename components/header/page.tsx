"use client";
import React, { useEffect } from "react";
import Container from "../container/page";
import Image from "next/image";
import LOGO from "../../assets/LOGO.png";
import { Button, Input, Avatar, Badge, Drawer, Menu } from "antd";
import {
  ArrowRightOutlined,
  BarChartOutlined,
  CloseSquareOutlined,
  HeartOutlined,
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.css";
import useCategoryStore from "@/store/categories/page";
import useSubCategoryStore from "@/store/sub-categories/page";
import Aksiya from "@/assets/aksiya.svg";
import Telefon from "@/assets/mobile.svg";
import WashingCard from "@/assets/washing_machine.svg";
import Desktop from "@/assets/desktop.svg";
import Konditseoner from "@/assets/konditseoner.svg";
import PC from "@/assets/pc.svg";
import ChangYutgich from "@/assets/chang_yutgich.svg";
import Muzlatgich from "@/assets/muzlatgich.svg";
import { getAccessToken } from "@/helpers/auth-helpers";
import { useState } from "react";
import Link from "next/link";
import SubMenu from "antd/es/menu/SubMenu";
import Icon from "@ant-design/icons/lib/components/Icon";
import { useRouter } from "next/navigation";
import useLikeStore from "@/store/likes/page";
import useProductStore from "@/store/products/page";
import Cookies from "js-cookie";
import useCartsStore from "@/store/card/page";

function Index() {
  const router = useRouter()
  const [accessToken, setAccessTokenn]:any = useState();
  const [openKeys, setOpenKeys] = useState<string[]>(["1"]);
  const [open, setOpen] = useState(false);
  const { categories, getCategories } = useCategoryStore();
  const { subcategories, getSubCategories } = useSubCategoryStore();
  const [category, setcategory] = useState("");
  const iconCategory = [
    Aksiya,
    Telefon,
    WashingCard,
    Desktop,
    Konditseoner,
    PC,
    ChangYutgich,
    Muzlatgich,
  ];
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const {count, getLikes} = useLikeStore()
  const {countCarts, getCards} = useCartsStore()

  async function getSub(e: any) {
    setcategory(e.name);
    await getSubCategories(e.id);
  }

  function goToCategories(id: number) {
    setOpen(false);
    localStorage.setItem("SubCategory", JSON.stringify(id));
  }

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const showCategory = () => {
    setOpenCategory(true);
  };

  const onCategory = () => {
    setOpenCategory(false);
  };


  const {getProducts} = useProductStore()

  useEffect(() => {
    const token = getAccessToken();
    setAccessTokenn(token);
    getCategories();
    getProducts()
    const id = Number(Cookies.get('id'))
    getLikes({id})
    getCards({id})
  }, []);
  return (
    <header>
      <div className="py-[10px] bg-[#F0F0F0] max-lg:hidden">
        <Container>
          <div className="flex justify-between items-center">
            <ul className="flex items-center gap-[20px]">
              <li className="text-[14px] font-medium cursor-pointer">
                About
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
              Delivery
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
              Terms of the contract
              </li>
              <li className="text-[14px] font-medium cursor-pointer">
              Our guarantees
              </li>
            </ul>
            <ul className="flex items-center gap-[15px]">
              <li className="text-[14px] font-medium ">+998 71 300 30 30</li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                Rus
              </li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                Ozb
              </li>
              <li className="px-[10px] py-[4px] bg-[white] rounded-lg cursor-pointer font-medium text-[#240E0066]">
                Eng
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <div className="py-[30px] px-[60px] flex justify-between bg-[white] rounded-md relative max-lg:px-4 duration-300">
            <Link href={"/"}>
              <Image
                className="ml-[30px]"
                src={LOGO}
                width={140}
                height={40}
                alt="Picture of the author"
              />
            </Link>

            <div className="flex gap-[16px] items-center max-lg:hidden">
              <Button
                onClick={() => setOpen(!open)}
                className="category_btn bg-[#1EB91E] w-[180px] text-white text-[14px] font-bold py-[15px] px-[36px] h-[46px]"
              >
                {open ? (
                  <CloseSquareOutlined className=" text-[18px]" />
                ) : (
                  <UnorderedListOutlined className=" text-[18px] rotate-180" />
                )}
                {open ? "close" : "Category"}
              </Button>
              <Input
                placeholder="Хочу купить..."
                className="search_input"
                prefix={<SearchOutlined />}
              />
            </div>

            <div
              className={`w-[100%] flex gap-[80px] absolute bg-[#fff] left-0 z-20 py-[30px] px-[20px] ${
                open
                  ? " top-[110px] duration-300 opacity-1"
                  : "top-[-1200px] duration-300 opacity-0"
              } drawer`}
            >
              <div>
                {categories.map((e:any, i:any) => {
                  return (
                    <div
                      key={i}
                      onClick={() => getSub(e)}
                      className={` ${
                        e.name == category
                          ? "bg-[#FF6F14] text-white"
                          : "bg-[#F0F0F0]"
                      } hover:bg-[#FF6F14] hover:text-white font-semibold mt-[10px] flex items-center justify-between w-[440px] h-[50px] py-[35px] px-[59px] rounded-xl cursor-pointer card `}
                    >
                      <Image
                        src={iconCategory[i]}
                        alt={e.name}
                        className="w-[30px] h-[30px] rasm"
                      />
                      <p>{e.name}</p>
                      <ArrowRightOutlined />
                    </div>
                  );
                })}
              </div>
              <div className="mt-[7px] border-l-[1px] pl-[60px]">
                <p className="text-[27px] font-bold mb-[20px]">{category}</p>
                {subcategories?.map((e:any, i:number) => {
                  return (
                    <Link
                      key={i}
                      href={"/categories"}
                      onClick={() => goToCategories(e.id)}
                    >
                      <div>
                        <p className="font-semibold text-[16px] mb-4 cursor-pointer">
                          {e.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <Badge className=" max-lg:hidden" count={count}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                  onClick={() => router.push('/likes')}
                >
                  <HeartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Badge className=" max-lg:hidden">
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <BarChartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Link href={"/card"} className=" max-lg:hidden">
                <Badge count={countCarts}>
                  <Avatar
                    shape="square"
                    size="large"
                    className="bg-[#F0F0F0] cursor-pointer"
                  >
                    <ShoppingCartOutlined className="text-[20px] text-[black]" />
                  </Avatar>
                </Badge>
              </Link>
              <MenuOutlined
                onClick={() => showDrawer()}
                className=" max-lg:block hidden cursor-pointer text-[24px] pr-[20px]"
              />
               {accessToken ? (
        <Avatar
          size="large"
          icon={<UserOutlined className="text-[20px] text-[black]" />}
          className="bg-[#F0F0F0] cursor-pointer max-lg:hidden"
          onClick={() => router.push('/profile')}
        />
      ) : (
        <Button onClick={() => router.push('/login')} className="login_btn bg-[#1EB91E] w-[100%] text-white text-[14px] font-bold py-[15px] px-[36px] h-[46px]">
          Kirish
        </Button>
      )}
            </div>
          </div>

          <div className="max-sm:block hidden duration-300 px-[20px]">
            <Button
              onClick={() => showCategory()}
              className="category_btn bg-[#1EB91E] w-[100%] text-white text-[14px] font-bold py-[15px] px-[36px] h-[46px]"
            >
              {open ? (
                <CloseSquareOutlined className=" text-[18px]" />
              ) : (
                <UnorderedListOutlined className=" text-[18px] rotate-180" />
              )}
              {open ? "Bekor qilish" : "Kategoriya"}
            </Button>
            <Input
              placeholder="Хочу купить..."
              className="search_inputt mt-[5px]"
              prefix={<SearchOutlined />}
            />
          </div>

          <Drawer title="Menu" width={300} onClose={onClose} open={openDrawer}>
            <div className="flex items-center gap-[15px]">
              <Badge count={2}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <HeartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Badge count={6}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-[#F0F0F0] cursor-pointer"
                >
                  <BarChartOutlined className="text-[20px] text-[black]" />
                </Avatar>
              </Badge>
              <Link href={"/card"}>
                <Badge count={7}>
                  <Avatar
                    shape="square"
                    size="large"
                    className="bg-[#F0F0F0] cursor-pointer"
                  >
                    <ShoppingCartOutlined className="text-[20px] text-[black]" />
                  </Avatar>
                </Badge>
              </Link>
              {getAccessToken() ? (
                <Link href={"profile"}>
                  <Avatar
                    size="large"
                    icon={<UserOutlined className="text-[20px] text-[black]" />}
                    className="bg-[#F0F0F0] cursor-pointer"
                  />
                </Link>
              ) : (
                <Link href={"/login"}>
                  <Button className="font-bold block">Kirish</Button>
                </Link>
              )}
            </div>
            <div className="mt-[20px]">
              <p className="text-[18px] font-medium">Biz haqimizda:</p>
              <p className="text-[18px] font-medium">Yetkazib berish:</p>
            </div>
          </Drawer>

          <Drawer
            placement="left"
            title="Category"
            width={300}
            onClose={onCategory}
            open={openCategory}
          >
            <Menu
              mode="inline"
              style={{ height: "100%", borderRight: 0 }}
              defaultSelectedKeys={["11"]}
              openKeys={openKeys} 
              onOpenChange={(keys) => setOpenKeys(keys.slice(-1))} 
            >
              {categories?.map((category: any, index: number) => {
                return (
                  <SubMenu
                    key={category.id}
                    title={
                      <span onClick={() => getSubCategories(category.id)}>
                        <Icon type="appstore" />
                        {category.name}
                      </span>
                    }
                  >
                    {subcategories?.map((subcat: any, subIndex: number) => (
                      <Menu.Item key={subIndex}>
                        <Link href={`/categories`}>{subcat.name}</Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              })}
            </Menu>
            ;
          </Drawer>
        </Container>
      </div>
    </header>
  );
}

export default Index;
