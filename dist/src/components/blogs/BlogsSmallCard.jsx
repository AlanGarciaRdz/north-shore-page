"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const link_1 = __importDefault(require("next/link"));
const bs_1 = require("react-icons/bs");
const OptimizeImage_1 = __importDefault(require("../base/OptimizeImage"));
function BlogsSmallCard({ blog }) {
    var _a, _b;
    return (<link_1.default href={blog.url || '/'}>
      <react_1.Container responsive={false} fluid css={{
            padding: 0,
            margin: 0,
            width: '230px',
        }}>
        <react_1.Card clickable css={{
            borderRadius: 0,
            boxShadow: 'none',
            backgroundColor: 'transparent',
        }}>
          <react_1.Card.Body css={{ padding: 0, margin: 0, borderRadius: 4, height: 156 }}>
            <OptimizeImage_1.default src={((_a = blog.image) === null || _a === void 0 ? void 0 : _a.src) || '/'} layout='fill' objectFit='cover' objectPosition='center' alt={(_b = blog.image) === null || _b === void 0 ? void 0 : _b.alt} useBlur={false}/>
          </react_1.Card.Body>
          <react_1.Card.Footer css={{ padding: 0, paddingTop: 16, borderRadius: 0 }}>
            <react_1.Grid.Container>
              <react_1.Grid xs={12} css={{ marginBottom: 8 }}>
                <react_1.Text css={{ margin: 0, padding: 0 }} weight='bold'>
                  {blog.title}
                </react_1.Text>
              </react_1.Grid>
              <react_1.Grid xs={12}>
                <react_1.Button light auto css={{ padding: 0, margin: 0, height: 20 }} iconRight={<bs_1.BsArrowRight />}>
                  {`Read more`}
                </react_1.Button>
              </react_1.Grid>
            </react_1.Grid.Container>
          </react_1.Card.Footer>
        </react_1.Card>
      </react_1.Container>
    </link_1.default>);
}
exports.default = BlogsSmallCard;
